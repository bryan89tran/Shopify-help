const redirects = require("./redirects.json");
const deleteManyRedirects = require("./deleteManyRedirects.js");

deleteManyRedirects(redirects)
  .then(data => console.log("Success", data))
  .catch(error => console.log("Error: ", error));
