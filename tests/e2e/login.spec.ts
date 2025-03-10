import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('User can successfully log in with valid credentials from environment variables', async ({
  page,
}) => {
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  const baseUrl = process.env.BASE_URL;

  if (!username || !password) {
    throw new Error('Environment variables USERNAME or PASSWORD are not set');
  }

  await page.goto(`${baseUrl}/login`);

  await page.fill('#username', username);
  await page.fill('#password', password);

  await page.click('button[type="submit"]');

  const userNameValue = await page.inputValue('#username');
  const passwordValue = await page.inputValue('#password');

  if (userNameValue !== username && passwordValue !== password) {
    throw new Error('Failed to fill in form');
  }

  await expect(page).toHaveURL(`${baseUrl}`);
});

test("User can't log in with invalid credentials from environment variables", async({
  page,
})=>{
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  const baseUrl = process.env.BASE_URL;

  if (!username || !password) {
    throw new Error('Environment variables USERNAME or PASSWORD are not set');
  }

  await page.goto(`${baseUrl}/login`);

  await page.fill('#username', 'invalid-username');
  await page.fill('#password', 'invalid-password');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(`${baseUrl}/login/`);
});