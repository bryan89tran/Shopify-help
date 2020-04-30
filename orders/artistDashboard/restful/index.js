require("../../../config");
const { NODE_ENV, SHOP } = process.env;
const jsonLastKeyAndValue = require("../../../helpers/jsonLastKeyAndValue");
const productsGetCollection = require("./orderRest");
const cursorJson = require(`./cursor-${NODE_ENV}-${SHOP}.json`);

const { lastKey: loopStartAt, lastValue: cursorStartAt } = jsonLastKeyAndValue(
  cursorJson
);

productsGetCollection(cursorStartAt, loopStartAt, 5)
  .then((results) => {
    console.log(results);
    process.exit();
  })
  .catch((error) => console.log("Error: Main - ", error));
