exports.config = {
  url: "https://www.walmart.com/ip/Rain-X-Latitude-Water-Repellency-2-IN-1-Replacement-Windshield-Wiper-Blades-Product-Of-The-Year-2017/46543690",
  launchConfig: {          // Docs : https://github.com/GoogleChrome/puppeteer/blob/v1.14.0/docs/api.md#puppeteerlaunchoptions
    headless: false,
    devtools: true   
  },
  viewport: {              // Visit : https://github.com/GoogleChrome/puppeteer/blob/v1.14.0/docs/api.md#pagesetviewportviewport
    width: 1600,
    height: 1024,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    isLandscape: false
  },
  user_agents : {
    IOS_SAFARI12:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_5 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) Version/11.0 Mobile/15D60 Safari/604.1"
  }
};
