const puppeteer = require('puppeteer');


const scrapeLogic = async (res) => {
  try {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
  
    await page.goto('https://developer.chrome.com/');
  
    // Set screen size
    await page.setViewport({width: 1080, height: 1024});
  
    // Type into search box
    await page.type('.search-box__input', 'customize');
  
    // Wait and click on first result
    const searchResultSelector = '.search-box__link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
  
    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
      'text/Customize DevTools'
    );
    const fullTitle = await textSelector?.evaluate(el => el.textContent);
  
    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);
    res.send(fullTitle);
  } catch (error) {
    console.error(error)
  } finally {
    await browser.close();
  }
  
}

module.exports = {scrapeLogic}