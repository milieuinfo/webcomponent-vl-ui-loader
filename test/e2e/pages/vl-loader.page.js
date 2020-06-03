const VlLoader = require('../components/vl-loader');
const {Page, Config} = require('vl-ui-core').Test;

class VlLoaderPage extends Page {
  async _getLoader(selector) {
    return new VlLoader(this.driver, selector);
  }

  async getLoader() {
    return this._getLoader('#loader');
  }

  async getLightLoader() {
    return this._getLoader('#light-loader');
  }

  async getSlotLoader() {
    return this._getLoader('#slot-loader');
  }

  async getSingleLoader() {
    return this._getLoader('#single-loader');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-loader.html');
  }
}

module.exports = VlLoaderPage;
