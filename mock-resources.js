exports.mocks = {
  // "fitment_widget_JS.ITEM_PAGE-2.5.0.bundle": {
  //   respondWith: {
  //     contentType: "text/javascript",
  //     body: "./mock-responses/foo.js"
  //   }
  // },
  "fitment_widget_CSS": {
    respondWith: {
      contentType: "text/css",
      body: "./mock-responses/foo.css"
    }
  },
  "tempo" : {
    respondWith: {
      contentType: "application/json",
      body: "./mock-responses/quimby.json"
    }
  }
};
