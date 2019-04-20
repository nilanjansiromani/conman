const puppeteer = require('puppeteer');
const config = require("./config/launch-config").config;
const liveViewHelper = require("./network-warper");


const liveViewDeskTop = async browser => {
  const page = await browser.newPage();
  page.setViewport(config.viewport);
  await page.setRequestInterception(true);
  page.on("request", interceptedRequest => {
    liveViewHelper.networkWarper(interceptedRequest);
  });
  await page.goto(config.url);
};

const liveView = async () => {
  const browser = await puppeteer.launch(config.launchConfig);
  liveViewDeskTop(browser);
};


liveView();
