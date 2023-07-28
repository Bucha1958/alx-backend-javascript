export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be array of strings');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line no-underscore-dangle
    this._length = length;
    // eslint-disable-next-line no-underscore-dangle
    this._students = students;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string.');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
  }

  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._length = length;
  }

  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be array of strings');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = students;
  }
}
