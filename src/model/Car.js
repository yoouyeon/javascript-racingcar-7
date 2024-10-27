import { Random } from "@woowacourse/mission-utils";
import carNameValidator from "../validator/carNameValidator.js";

class Car {
  #name;

  #position;

  #positionHistory;

  static #MOVE_CONDITION = Object.freeze({
    minValue: 0,
    maxValue: 9,
    thresholdValue: 4,
  });

  /**
   * @constructor
   * @param {string} name - 자동차의 이름
   * @throws {CustomError} 이름이 유효하지 않은 경우 발생
   */
  constructor(name) {
    carNameValidator.checkLength(name);
    this.#name = name;
    this.#position = 0;
    this.#positionHistory = [];
  }

  /**
   * 자동차의 모든 정보를 반환하는 getter
   * @getter
   * @returns {Object} 자동차의 이름, 현재 위치, 이동 기록을 담은 객체
   */
  get info() {
    return {
      name: this.#name,
      position: this.#position,
      positionHistory: this.#positionHistory,
    };
  }

  /**
   * 전진 조건에 따라 자동차를 이동시키는 메서드
   * @public
   * @returns {void}
   */
  move() {
    const randomValue = Random.pickNumberInRange(
      Car.#MOVE_CONDITION.minValue,
      Car.#MOVE_CONDITION.maxValue
    );
    if (randomValue >= Car.#MOVE_CONDITION.thresholdValue) {
      this.#position += 1;
    }
    this.#recordPosition();
  }

  /**
   * 현재 위치를 이동 기록에 추가하는 메서드
   * @private
   * @returns {void}
   */
  #recordPosition() {
    this.#positionHistory.push(this.#position);
  }
}

export default Car;
