import Car from "./Car.js";
import generalValidator from "./validator/generalValidator.js";
import carNameValidator from "./validator/carNameValidator.js";
import moveCountValidator from "./validator/moveCountValidator.js";
import Input from "./view/Input.js";
import Output from "./view/Output.js";
import RaceEngine from "./RaceEngine.js";

class RaceController {
  static #CAR_NAME_SEPARATOR = ",";

  #carCollection;

  #moveCount;

  #raceEngine;

  constructor() {
    this.#carCollection = [];
    this.#moveCount = 0;
    this.#raceEngine = new RaceEngine();
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
    const { history, winners } = this.#raceEngine.start(
      this.#moveCount,
      this.#carCollection
    );
    Output.printAllRounds(history);
    Output.printWinners(winners);
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
      this.#carCollection.push(new Car(carName));
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
