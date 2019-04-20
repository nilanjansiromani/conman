const chalk = require("chalk");
const mocks = require("./mock-resources").mocks;
const log = console.log;
const fs = require("fs");

const networkWarper = async interceptedRequest => {
  const mockUrlList = Object.keys(mocks);
  if (mockUrlList.includes(interceptedRequest.url())) {
    const mockUrL = interceptedRequest.url();
    log(chalk.green(" [c]  conman just mokcked " + interceptedRequest.url()));
    const resposeObject = mocks[mockUrL]["respondWith"];
    console.log(resposeObject);
    interceptedRequest.respond({
      contentType: resposeObject.contentType,
      body: fs.readFileSync(resposeObject.body)
    });
  }
  interceptedRequest.continue();
};

module.exports = {
  networkWarper
};
