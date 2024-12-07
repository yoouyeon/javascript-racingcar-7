// @ts-check

import CustomError from './CustomError.js';

class Car {
  /** @type {string} */
  #name;

  /** @type {number} */
  #position;

  /**
   * @constructor
   * @param {string} name - 자동차 이름
   */
  constructor(name) {
    Car.validateName(name);
    this.name = name;
    this.position = 0;
  }

  /**
   * @param {string} name - 자동차 이름
   * @description 자동차 이름 유효성 검사
   */
  static validateName(name) {
    if (name === '') {
      throw new CustomError('이름은 빈 문자열일 수 없습니다.');
    }
    if (name.length > 5) {
      throw new CustomError('이름은 5자 이하로 입력해주세요.');
    }
  }
}

export default Car;
