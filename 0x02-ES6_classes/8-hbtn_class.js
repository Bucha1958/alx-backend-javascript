/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be string');
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
