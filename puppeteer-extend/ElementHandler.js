

import { ElementHandle } from "puppeteer/lib/ElementHandle";

ElementHandle.prototype.element = async (locator) => {
    return await this.$(locator)

}

ElementHandle.prototype.waitForPageLoad = async () => {
    return await this.waitForNavigation({
        waitUntil: 'domcontentloaded'
    });
}

/**
 * Check if element is visible in the DOM
 * @returns {Promise<Boolean>}
 **/
ElementHandle.prototype.isVisible = async function(){
    return (await this.boundingBox() !== null);
};

