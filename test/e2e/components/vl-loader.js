const { VlElement } = require('vl-ui-core').Test;
const { By } = require('vl-ui-core').Test.Setup;

class VlLoader extends VlElement {
    async isLight() {
        return this.hasAttribute('data-vl-light');
    }

    async isSingle() {
        return this.hasAttribute('data-vl-single');
    }

    async slotElements() {
        const slot = await this.shadowRoot.findElement(By.css("slot"));
        return this.getAssignedElements(slot);
    }
}

module.exports = VlLoader;
