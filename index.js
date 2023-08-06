import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto("https:/example.com");
  await page.waitForSelector('input._3704LK');
  const searchBox = await page.$('input._3704LK');
  const searchTerm = 'iphone'
  await searchBox.type(searchTerm);
  await searchBox.press('Enter');
  await page.waitForNavigation();
  await page.screenshot({ path: `./images/image.png`, fullPage: true });
  await page.pdf({ format: "A4", path: "./pdf/example.pdf" });
  await browser.close();
})();
