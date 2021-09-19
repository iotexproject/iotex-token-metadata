const test = require("tape");
const tokenMetadata = require("../");
const fs = require("fs");
const path = require("path");

test("token-metadata is an object", function (t) {
  t.equal(typeof tokenMetadata, "object", "is an obj.");
  t.end();
});

test("logos file should exist", function (t) {
  Object.keys(tokenMetadata).forEach((address) => {
    const metadata = tokenMetadata[address];
    if (!metadata.logo) return;
    const fileName = metadata.logo;
    const filePath = path.join(__dirname, "..", "images", fileName);
    t.ok(fs.existsSync(filePath), `file exists: "${fileName}"`);
  });

  t.end();
});

test("no dup symbols", function (t) {
  const symbols = Object.values(tokenMetadata).map((address) => address.symbol);
  const symbolsCheck = new Map();
  let duplicateSymbol;

  symbols.forEach((symbol) => {
    if (symbolsCheck.has(symbol) && symbol !== undefined) {
      duplicateSymbol = symbol;
      return;
    }
    symbolsCheck.set(symbol, true);
  });

  const msg = duplicateSymbol
    ? `found overlapping symbol ${duplicateSymbol}`
    : "symbols should not overlap";
  t.notOk(duplicateSymbol, msg);
  t.end();
});

test("symbols should be 15 or less characters", function (t) {
  Object.keys(tokenMetadata).forEach((address) => {
    const contract = tokenMetadata[address];
    const symbol = contract.symbol;
    if (symbol) {
      t.notOk(
        symbol.length > 15,
        `symbol with more than 10 characters: "${symbol}"`
      );
    }
  });
  t.end();
});

test("logos path names should not contain space", function (t) {
  const dirContent = fs.readdirSync(path.join(__dirname, "..", "images"));
  Object.keys(tokenMetadata).forEach((address) => {
    const contract = tokenMetadata[address];
    if (!contract.logo) return;
    const fileName = contract.logo;
    t.notOk(
      fileName.includes(" "),
      `filename does not include space: "${fileName}"`
    );
  });

  t.end();
});

test("logos icon should not be empty", function (t) {
  Object.keys(tokenMetadata).forEach((address) => {
    const contract = tokenMetadata[address];
    const logo = contract.logo;
    t.notEqual(logo.length, 0);
  });
  t.end();
});
