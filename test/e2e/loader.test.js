const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlLoaderPage = require('./pages/vl-loader.page');

describe('vl-loader', async () => {
  const vlLoaderPage = new VlLoaderPage(driver);

  before(() => {
    return vlLoaderPage.load();
  });

  it('als gebruiker kan ik zien dat de pagina aan het laden is', async () => {
    const loader = await vlLoaderPage.getLoader();
    await assert.eventually.isTrue(loader.isDisplayed());
    await assert.eventually.equal(loader.getText(), 'Pagina is aan het laden');
  });

  it('als gebruiker kan ik het verschil zien tussen een light en gewone loader', async () => {
    const loader = await vlLoaderPage.getLoader();
    const lightLoader = await vlLoaderPage.getLightLoader();
    await assert.eventually.isFalse(loader.isLight());
    await assert.eventually.isTrue(lightLoader.isLight());
  });

  it('als gebruiker kan ik de loader tekst zien', async () => {
    const loader = await vlLoaderPage.getLoader();
    const slotLoader = await vlLoaderPage.getSlotLoader();
    const slot = await slotLoader.slotElements();
    await assert.eventually.equal(loader.getText(), 'Pagina is aan het laden');
    await assert.eventually.equal(slot[0].getText(), 'Informatie is aan het laden');
  });

  it('als gebruiker kan ik het verschil zien tussen een single en gewone loader', async () => {
    const loader = await vlLoaderPage.getLoader();
    const singleLoader = await vlLoaderPage.getSingleLoader();
    await assert.eventually.isFalse(loader.isSingle());
    await assert.eventually.isTrue(singleLoader.isSingle());
    await assert.eventually.isTrue(loader.hasText());
    await assert.eventually.isFalse(singleLoader.hasText());
  });
});
