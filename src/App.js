// @ts-check
import Car from './Car.js';
import CustomError from './CustomError.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

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
    this.startGame();
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

  /**
   * @description 게임 시작
   */
  startGame() {
    OutputView.printResultHeader();
    for (let count = 0; count < this.#tryCount; count += 1) {
      this.moveCars();
      this.printResult();
    }
    this.printWinners();
  }

  moveCars() {
    this.#cars.forEach((car) => car.move());
  }

  printResult() {
    this.#cars.forEach((car) => OutputView.printCarState(car));
    OutputView.printNewLine();
  }

  printWinners() {
    const winners = App.getWinners(this.#cars);
    OutputView.printWinners(winners);
  }

  /**
   * @param {CarType[]} cars - 자동차 목록
   * @returns {CarType[]} 우승자 목록
   */
  static getWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    return cars.filter((car) => car.position === maxPosition);
  }
}

export default App;
