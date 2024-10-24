import { Random } from "@woowacourse/mission-utils";
import carNameValidator from "./validator/carNameValidator.js";

class Car {
  #name;

  #distance;

  static #MOVE_CONDITION = Object.freeze({
    minValue: 0,
    maxValue: 9,
    thresholdValue: 4,
  });

  /**
   * Car 인스턴스를 생성하고, 이름과 이동거리를 초기화하는 생성자
   * @param {string} name - 자동차의 이름
   * @throws {CustomError} 이름이 유효하지 않은 경우 발생
   */
  constructor(name) {
    carNameValidator.checkLength(name);
    this.#name = name;
    this.#distance = 0;
  }

  /**
   * 현재 자동차의 정보 객체를 반환하는 getter
   * @returns {object} { name: string, distance: number }
   */
  get currentInfomation() {
    return { name: this.#name, distance: this.#distance };
  }

  /**
   * 전진 조건에 따라 자동차를 이동시키는 메서드
   */
  move() {
    const randomValue = Random.pickNumberInRange(
      Car.#MOVE_CONDITION.minValue,
      Car.#MOVE_CONDITION.maxValue
    );
    if (randomValue >= Car.#MOVE_CONDITION.thresholdValue) {
      this.#distance += 1;
    }
  }
}

export default Car;
