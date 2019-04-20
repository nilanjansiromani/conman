const mocks = require("../mock-resources").mocks;
const fs = require("fs");

const networkWarper = async interceptedRequest => {
  Object.keys(mocks).forEach((pattern)=>{
    if(interceptedRequest.url().includes(pattern)){
      interceptedRequest.respond({
        contentType: mocks[pattern].respondWith.contentType,
        body: fs.readFileSync(mocks[pattern].respondWith.body)
      });
    }
  });
  interceptedRequest.continue();
};

module.exports = {
  networkWarper
};
