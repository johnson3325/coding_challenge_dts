import type { Page } from '@playwright/test';

export class CommonUtils {
  static async waitForElement(page: Page, selector: string, timeout = 5000) {
    await page.waitForSelector(selector, { timeout });
  }

  static log(message: string) {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  }

  static async takeScreenshot(page: Page, name: string) {
    await page.screenshot({ path: `screenshots/${name}.png` });
  }
}