import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  //   await page.waitForSelector('input._3704LK');
  //   const searchBox = await page.$('input._3704LK');
  //   const searchTerm = 'iphone'
  //   await searchBox.type(searchTerm);
  //   await searchBox.press('Enter');

  await page.goto("http://localhost:3000/login");

  await page.waitForSelector('input[name="Email"]');
  
  await page.waitForSelector('input[name="Password"]');

  const email = "mymail@gmail.com";

  const password = "123456";

  await page.type('input[name="Email"]', email);

  await page.type('input[name="Password"]', password);

  await page.keyboard.press("Enter");

  await page.goto("http://localhost:3000/products/Ice%20creams");

  await page.screenshot({ path: `./images/image.png`, fullPage: true });

  await page.pdf({ format: "A4", path: "./pdf/example.pdf" });

  await browser.close();
})();
