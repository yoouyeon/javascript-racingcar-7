// @ts-check
import Car from './Car.js';
import CustomError from './CustomError.js';
import InputView from './InputView.js';

/** @typedef {import('./Car.js').default} CarType */

const CAR_NAME_SEPARATOR = ',';
class App {
  /** @type {CarType[]} */
  #cars;

  /** @type {number} */
  #tryCount;

  async run() {
    await this.initializeCars();
    await this.initializeTryCount();
    // 자동차 경주 시작
  }

  /**
   * @description 참가할 자동차 이름을 입력받아 저장
   */
  async initializeCars() {
    const carNames = await InputView.readCarNames();
    const carNamesArray = carNames.split(CAR_NAME_SEPARATOR);
    App.validateCarCount(carNamesArray);
    this.#cars = carNamesArray.map((carName) => new Car(carName));
  }

  /**
   * @param {string[]} carNamesArray - 자동차 이름 배열
   */
  static validateCarCount(carNamesArray) {
    if (carNamesArray.length < 2) {
      throw new CustomError('자동차는 2대 이상이어야 합니다.');
    }
  }

  /**
   * @description 시도 횟수 입력받아 저장
   */
  async initializeTryCount() {
    const tryCount = await InputView.readTryCount();
    App.validateTryCount(tryCount);
    this.#tryCount = Number(tryCount);
  }

  /**
   * @param {string} tryCount - 시도 횟수
   */
  static validateTryCount(tryCount) {
    const tryCountNumber = Number(tryCount);
    if (Number.isNaN(tryCountNumber)) {
      throw new CustomError('시도 횟수는 숫자여야 합니다.');
    }
    if (tryCountNumber < 1) {
      throw new CustomError('시도 횟수는 1 이상이어야 합니다.');
    }
  }
}

export default App;
