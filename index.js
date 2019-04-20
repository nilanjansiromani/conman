const puppeteer = require("puppeteer");
const config = require("./config/launch-config").config;
const liveViewHelper = require("./network-warper");
const chalk = require("chalk");

const liveViewDeskTop = async browser => {
  const page = await browser.newPage();
  await page.setViewport(config.viewport);
  await page.setRequestInterception(true);
  page.on("request", interceptedRequest => {
    liveViewHelper.networkWarper(interceptedRequest).catch((e)=>{
      console.log(chalk.bgRed.yellow.bold("OOPS something went wrong"));
    });
  });

  await page.goto(config.url)
};

const liveView = async () => {
  const browser = await puppeteer.launch(config.launchConfig);
  await liveViewDeskTop(browser);
};


liveView().catch((e)=>{
  console.log(chalk.bgRed.yellow.bold("OOPS something went wrong"));
});
