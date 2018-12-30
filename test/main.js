const assert = require("assert");
const main = require("../src/main");

describe("おこってない", function() {
  it("おこった?", function() {
    assert.equal(main.notAngry("おこった?"), "おこってないよ");
  });
});
