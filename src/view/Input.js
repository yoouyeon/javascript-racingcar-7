import { Console } from "@woowacourse/mission-utils";

class Input {
  static #CAR_NAME_INPUT_MESSAGE =
    "경주할 자동차들의 이름을 쉼표(,)로 구분해서 입력하세요.\n";

  static #MOVE_COUNT_INPUT_MESSAGE =
    "이동을 시도할 횟수를 숫자로 입력해주세요.\n";

  /**
   * @async
   * @param {string} message - 입력 전에 출력할 메시지
   * @returns {Promise<string>} - 입력받은 문자열
   */
  static async #readLine(message) {
    return Console.readLineAsync(message);
  }

  /**
   * 자동차 이름들을 입력받는 메서드
   * @returns {Promise<string>} - 입력받은 자동차 이름들 (쉼표로 구분)
   */
  static async readCarNames() {
    const carNames = await Input.#readLine(Input.#CAR_NAME_INPUT_MESSAGE);
    return carNames;
  }

  /**
   * 이동 횟수를 입력받는 메서드
   * @async
   * @returns {Promise<string>} - 입력받은 이동 횟수
   */
  static async readMoveCount() {
    const moveCount = await Input.#readLine(Input.#MOVE_COUNT_INPUT_MESSAGE);
    return moveCount;
  }
}

export default Input;
