import generalValidator from "./validator/generalValidator.js";
import carNameValidator from "./validator/carNameValidator.js";
import moveCountValidator from "./validator/moveCountValidator.js";
import { Input, Output } from "./view/index.js";
import Car from "./model/Car.js";
import Race from "./model/Race.js";

class RaceController {
  static #CAR_NAME_SEPARATOR = ",";

  #raceModel;

  constructor() {
    this.#raceModel = null;
  }

  /**
   * 레이스를 시작하는 메서드
   * @async
   * @returns {Promise<void>}
   * @description
   * 1. 자동차 이름을 입력받는다.
   * 2. 자동차 이름을 검증하고 자동차 객체들을 생성한다.
   * 3. 시도 횟수를 입력받는다.
   * 4. 시도 횟수를 검증하고 숫자로 변환한다.
   * 5. 레이스를 시작한다.
   * 6. 레이스 결과를 확인한다.
   * 7. 전체 레이스 결과와 최종 우승자를 출력한다.
   */

  async run() {
    const carNames = await Input.readCarNames();
    const carCollection = RaceController.#createCarCollection(carNames);
    const inputCout = await Input.readMoveCount();
    const tryCount = RaceController.#getTryCount(inputCout);
    this.#raceModel = new Race(carCollection, tryCount);
    this.#raceModel.start();
    const { history, winners } = this.#raceModel.result;
    Output.printAllRounds(history);
    Output.printWinners(winners);
  }

  /**
   * @private
   * @param {string} carNames - #CAR_NAME_SEPARATOR로 구분된 자동차 이름들
   * @returns {Array<Car>} - 자동차 객체들의 배열
   */
  static #createCarCollection(carNames) {
    generalValidator.checkInput(carNames);
    const carNameList = carNames.split(RaceController.#CAR_NAME_SEPARATOR);
    carNameValidator.checkList(carNameList);
    return carNameList.map((carName) => new Car(carName));
  }

  /**
   * @private
   * @param {string} tryCount - 이동 횟수
   * @returns {number} - 이동 횟수
   */
  static #getTryCount(tryCount) {
    generalValidator.checkInput(tryCount);
    moveCountValidator.checkCount(tryCount);
    return Number.parseInt(tryCount, 10);
  }
}

export default RaceController;
