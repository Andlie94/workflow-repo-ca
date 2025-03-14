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

  await page.locator('#username').fill(username);
  await page.locator('#password').fill(password);

  await page.click('button[type="submit"]');
  await page.waitForURL(`${baseUrl}`, { timeout: 10000 });
  

  await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
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

  await page.fill('#username', 'test@stud.noroff.no');
  await page.fill('#password', 'invalid-password');

  await page.click('button[type="submit"]');

  await expect(page.locator("#message-container")).toContainText(
    "Invalid email or password"
  );
});