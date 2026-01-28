class Portfolio {
  constructor() {
    this.ownedSymbols = new Map();
  }

  getOwnedSymbols() {
    return this.ownedSymbols;
  }

  getNumberOfShares(symbol) {
    return this.ownedSymbols.get(symbol) || 0;
  }

  numberOfOwnedSymbols() {
    return this.ownedSymbols.size;
  }

  _modifyOwnedSymbols(symbol, quantityChange) {
    const currentQuantity = this.ownedSymbols.get(symbol) || 0;
    const newQuantity = currentQuantity + quantityChange;

    if (newQuantity > 0) {
      this.ownedSymbols.set(symbol, newQuantity);
    } else if (newQuantity === 0) {
      this.ownedSymbols.delete(symbol);
    } else {
      throw new Error("Not possible to sell this number of shares.");
    }
  }

  purchase(symbol, quantity) {
    this._modifyOwnedSymbols(symbol, quantity);
  }

  sell(symbol, quantity) {
    this._modifyOwnedSymbols(symbol, -quantity);
  }

  isEmpty() {
    return this.ownedSymbols.size === 0;
  }
}

module.exports = { Portfolio };
