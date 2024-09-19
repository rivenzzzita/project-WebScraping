import puppeteer from "puppeteer";

const openPage = async () => {

    const browser = await puppeteer.launch({
        executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
        headless: false,
        slowMo: 200,
    });
    const page = await browser.newPage();

    await page.goto("https://ruesfront.rues.org.co/");
    await page.click("input[id='search']");
    await page.type("input[id='search']", '890902816');
    await page.evaluate(() => {
        document.querySelector("#btn-busqueda").click();
    });
    await page.waitForNavigation();
    await page.waitForSelector("a.text-end.pe-2");
    await page.click("a.text-end.pe-2");
    await page.screenshot({path: 'example.png'});

    await browser.close();

}

openPage();
