import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { user } from '../data/users.js';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://realworld.qa.guru/#/login');
  await page.getByRole('button', { name: 'Login' }).waitFor();

  await page.getByRole('textbox', { name: 'Email' }).fill(user.testUser.email);
  await page.getByRole('textbox', { name: 'Password' }).fill(user.testUser.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/#/');

  // ✅ создаём папку заранее
  const authDir = path.join(process.cwd(), 'src', 'auth');
  fs.mkdirSync(authDir, { recursive: true });

  const authFile = path.join(authDir, 'auth.json');

  // ✅ сохраняем storageState в корректный путь
  await context.storageState({ path: authFile });

  console.log('auth.json exists:', fs.existsSync(authFile), 'Path:', authFile);

  await browser.close();
})();
