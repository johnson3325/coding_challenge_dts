import { expect } from '@playwright/test';
import { test } from '../fixtures/loginFixture.js';
import { CommonUtils } from '../utils/common.js';

test.describe('Login Tests', () => {
    test('TC001 - Positive: Login with valid credentials', async ({ page, performLogin }) => {
        CommonUtils.log('Starting positive login test');
        await test.step('Perform login with valid credentials', async () => {
            await performLogin();
        });
        await test.step('Verify success message', async () => {
            const successMessage = await page.locator('.flash.success').textContent();
            expect(successMessage, { message: 'Verify success message is displayed after valid login' }).toContain('You logged into a secure area!');
        });
        CommonUtils.log('Positive login test passed');
    });

    test('TC002 - Negative: Login with invalid password', async ({ page, performLogin }) => {
        CommonUtils.log('Starting negative login test');
        await test.step('Attempt login with invalid password', async () => {
            await performLogin(process.env.USERNAME, 'invalidpassword');
        });
        await test.step('Verify error message', async () => {
            const errorMessage = await page.locator('.flash.error').textContent();
            expect(errorMessage, { message: 'Verify error message for invalid password' }).toContain('Your password is invalid!');
        });
        CommonUtils.log('Negative login test passed');
    });

    test('TC003 - Negative: Login with invalid username', async ({ page, performLogin }) => {
        CommonUtils.log('Starting invalid username test');
        await test.step('Attempt login with invalid username', async () => {
            await performLogin('invaliduser', process.env.PASSWORD!);
        });
        await test.step('Verify error message', async () => {
            const errorMessage = await page.locator('.flash.error').textContent();
            expect(errorMessage, { message: 'Verify error message for invalid username' }).toContain('Your username is invalid!');
        });
        CommonUtils.log('Invalid username test passed');
    });
});