const path = require('path');

module.exports = {
  // mode: "production",
  entry: {
    app: "/public/js/main.js",
  },
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "public")
    // path: "/public/js/app.bundle.js"
  },

  entry: {
    app: "/public/css/main.css",
  },
  output: {
    filename: "build.css",
    path: path.resolve(__dirname, "public")
    // path: "/public/js/app.bundle.js"
  }

};