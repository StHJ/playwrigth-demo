import { expect } from "@playwright/test";
import { test } from "./fixture";


test.beforeEach(async ({ page }) => {
  page.setViewportSize({ width: 1280, height: 768 });
  await page.goto("https://saicoksasit-saicoksa-sandbox.insuremo.com/portal/");
  await page.waitForLoadState("networkidle");
});
// test.beforeEach(async ({ page }) => {
//   await page.goto("https://saicoksasit-saicoksa-sandbox.insuremo.com/portal/");
// });

test('saico create policy', async ({ page, ai, aiQuery, aiAssert }) => {
  // 输入用户名和密码
  await ai('Username下面输入saicoadmin');
  await ai('Password:下面输入Saicoksa123456#');
  await ai('点击Sign In按钮');
  await ai('点击Policy Administration');

  // 点击Policy Administration前，先设置新页面的监听
  // const [newPage] = await Promise.all([
  //   page.context().waitForEvent('page'),// 等待新页面打开
  //   ai("点击Policy Administration")      // 执行点击操作
  // ]);

  // 等待新页面加载完成
  await page.waitForLoadState();

  // 现在你可以在新页面上进行操作了
  console.log('新页面URL:', page.url());

  // 示例：在新页面上执行操作

  // 使用完毕后记得关闭新页面
  await page.close();
});