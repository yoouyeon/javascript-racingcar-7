// @ts-check
import { MissionUtils } from '@woowacourse/mission-utils';
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

  get status() {
    return {
      name: this.name,
      position: this.position,
    };
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

  /**
   * @description 자동차 전진 여부 결정 후 위치 업데이트
   */
  move() {
    if (Car.pickRandomNumber() >= 4) {
      this.position += 1;
    }
  }

  /**
   * @return {number} - 0부터 9까지의 랜덤 숫자
   */
  static pickRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default Car;
