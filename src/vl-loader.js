import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlLoader
 * @class
 * @classdesc De loader component is een animatie dat aangeeft dat een pagina of website aan het laden is.
 *
 * @extends HTMLElement
 *
 * @property {boolean} data-vl-light - Attribuut wordt gebruikt om een alternatieve rendering te bekomen in combinatie met een donkere achtergrond.
 * @property {boolean} data-vl-text - Attribuut wordt gebruikt om een informatieve tekst te tonen tijdens het laden.
 * @property {boolean} data-vl-single - Attribuut wordt gebruikt om aan te geven dat er geen tekst getoond mag worden.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-loader/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-loader/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-loader.html|Demo}
 *
 */
export class VlLoader extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['light', 'text', 'single'];
  }

  constructor() {
    super(`
        <style>
            @import '/src/style.css';
        </style>
        <div class="vl-u-align-center">
            <div class="vl-loader" role="alert" aria-busy="true"></div>
            <p id="text">
                <slot>
                    Pagina is aan het laden
                </slot>
            </p>
        </div>
    `);
  }

  get _loader() {
    return this._shadow.querySelector('.vl-loader');
  }

  get _text() {
    return this._shadow.querySelector('#text');
  }

  _lightChangedCallback(oldValue, newValue) {
    this._toggleClass(this._loader, newValue, 'vl-loader--light');
  }

  _textChangedCallback(oldValue, newValue) {
    this._text.innerText = newValue;
  }

  _singleChangedCallback(oldValue, newValue) {
    this._toggleClass(this._text, newValue, 'vl-u-visually-hidden');
  }
}

define('vl-loader', VlLoader);
