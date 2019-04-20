exports.mocks = {
    "https://i5.wal.co/dfw/63fd9f59-e4a9/5d90040b-09e1-49f3-90ca-4affa4b29196/v1/fitment_widget_JS.ITEM_PAGE-2.5.0.bundle.550d862006545523f5d4.js" : {
        respondWith : {
            contentType: "text/javascript",
            body: "./mock-responses/foo.js"
        }
    },
    "https://i5.wal.co/dfw/63fd9f59-e4a9/5d90040b-09e1-49f3-90ca-4affa4b29196/v1/fitment_widget_CSS.ITEM_PAGE-2.5.0.style.550d862006545523f5d4.css" : {
        respondWith : {
            contentType: "text/css",
            body: "./mock-responses/foo.css"
        }
    },
    "config" : {
        respondWith : {
            contentType: "text/css",
            body: "./mock-responses/foo.css"
        }
    }
}