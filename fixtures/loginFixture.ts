import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import * as dotenv from 'dotenv';

dotenv.config();

type LoginFixtures = {
  loginPage: LoginPage;
  performLogin: (username?: string, password?: string) => Promise<void>;
};

export const test = base.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  performLogin: async ({ page, loginPage }, use) => {
    const login = async (username?: string, password?: string) => {
      await test.step('Navigate to login page', async () => {
        await loginPage.goto();
      });
      await test.step('Perform login', async () => {
        const userUsername = username || process.env.USERNAME!;
        const userPassword = password || process.env.PASSWORD!;
        await loginPage.login(userUsername, userPassword);
      });
    };
    await use(login);
  },
});