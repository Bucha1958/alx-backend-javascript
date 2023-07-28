// eslint-disable-next-line no-unused-vars, import/extensions
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    // eslint-disable-next-line no-underscore-dangle
    this._amount = amount;
    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency;
  }

  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  set amount(amount) {
    // eslint-disable-next-line no-underscore-dangle
    this._amount = amount;
  }

  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  set currency(currency) {
    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency;
  }

  displayFullPrice() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
