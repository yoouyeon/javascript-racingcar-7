import Car from "./Car";
import {
  carNameValidator,
  generalValidator,
  moveCountValidator,
} from "./validator";
import { Input } from "./view";

class RaceController {
  static #CAR_NAME_SEPARATOR = ",";

  #carCollection;

  #moveCount;

  constructor() {
    this.#carCollection = new Map();
    this.#moveCount = 0;
  }

  /**
   * 레이스를 시작하는 메서드
   * @async
   */

  async run() {
    const carNames = await Input.readCarNames();
    this.#createCarCollection(carNames);
    const moveCount = await Input.readMoveCount();
    this.#setMoveCount(moveCount);
    // TODO : race engine을 돌려 history와 winner를 반환
    // TODO : history와 winner를 출력
  }

  /**
   * @private
   * @param {string} carNames - #CAR_NAME_SEPARATOR로 구분된 자동차 이름들
   */
  #createCarCollection(carNames) {
    generalValidator.checkInput(carNames);
    const carNameList = carNames.split(RaceController.#CAR_NAME_SEPARATOR);
    carNameValidator.checkList(carNameList);
    carNameList.forEach((carName) => {
      this.#carCollection.set(carName, new Car(carName));
    });
  }

  /**
   * @private
   * @param {string} moveCount - 이동 횟수
   */
  #setMoveCount(moveCount) {
    generalValidator.checkInput(moveCount);
    moveCountValidator.checkCount(moveCount);
    this.#moveCount = Number.parseInt(moveCount, 10);
  }
}

export default RaceController;
