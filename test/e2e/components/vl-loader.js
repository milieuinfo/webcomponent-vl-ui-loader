const { VlElement } = require('vl-ui-core').Test;
const { By } = require('vl-ui-core').Test.Setup;

class VlLoader extends VlElement {
    async isLight() {
        return this.hasAttribute('data-vl-light');
    }

    async isSingle() {
        return this.hasAttribute('data-vl-single');
    }

    async getText() {
        const slot = await this._getSlotElement();
        const element = await new VlElement(this.driver, slot);
        return element.getText();
    }

    async slotElements() {
        const slot = await this._getSlotElement();
        return this.getAssignedElements(slot);
    }

    async _getSlotElement() {
        return this.shadowRoot.findElement(By.css("slot"));
    }
}

module.exports = VlLoader;
