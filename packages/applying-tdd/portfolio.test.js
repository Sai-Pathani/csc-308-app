/**
 * Tests for Portfolio class
 * Written by: Sai Pathani
 *
 * Reflection on TDD process:
 * I found TDD useful in ensuring that I only wrote code that was necessary to pass the tests.
 * It helped to clarify the requirements and design of the Portfolio class before implementing it.
 * I was a little confused at first about what to look for in the Refactor step, but I eventually
 * got the hang of it by focusing on improving code readability and reducing duplication.
 *
 * My opinion of TDD after completing this exercise:
 * I think TDD is a good practice for building the right functionality and not leaving tests for later.
 * I do think it can slow down development initially. However, after this exercise, I believe that
 * the benefits are enough to justify the extra time spent upfront.
 */


const { Portfolio } = require("./portfolio");

test("Portfolio shall answer wheter it is empty", () => {
  const portfolio = new Portfolio();
  expect(portfolio.isEmpty()).toBe(true);
});

test("Portfolio can make a purchase given symbol and quantity", () => {
  const portfolio = new Portfolio();
  portfolio.purchase("AAPL", 10);
  expect(portfolio.isEmpty()).toBe(false);
  expect(portfolio.getNumberOfShares("AAPL")).toBe(10);
  expect(portfolio.numberOfOwnedSymbols()).toBe(1);
});

test("selling shares subtracts from owned quantity", () => {
  const portfolio = new Portfolio();
  portfolio.purchase("AAPL", 10);
  portfolio.sell("AAPL", 4);
  expect(portfolio.getOwnedSymbols().get("AAPL")).toBe(6);
});

test("Portfolio shall answer quantity of unique owned symbols", () => {
  const portfolio = new Portfolio();
  portfolio.purchase("AAPL", 10);
  portfolio.purchase("GOOG", 5);
  expect(portfolio.numberOfOwnedSymbols()).toBe(2);
});

test("selling all shares of a symbol removes it from owned symbols", () => {
  const portfolio = new Portfolio();
  portfolio.purchase("AAPL", 10);
  portfolio.sell("AAPL", 10);
  expect(portfolio.numberOfOwnedSymbols()).toBe(0);
});

test("Portfolio shall answer quantity of shares owned for a given symbol", () => {
  const portfolio = new Portfolio();
  portfolio.purchase("AAPL", 15);
  expect(portfolio.getNumberOfShares("AAPL")).toBe(15);
  expect(portfolio.getNumberOfShares("GOOG")).toBe(0);
});

test("cannot sell more shares than owned", () => {
  const portfolio = new Portfolio();
  portfolio.purchase("AAPL", 10);
  expect(() => {
    portfolio.sell("AAPL", 15);
  }).toThrow("Not possible to sell this number of shares.");
});
