import { Console } from "@woowacourse/mission-utils";

class Output {
  static #RESULT_MESSAGE = "실행 결과";

  static #PROGRESS_BAR = "-";

  static #WINNER_MESSAGE = "최종 우승자 : ";

  /**
   * 메시지를 출력하는 메소드
   * @private
   * @static
   * @param {string} message - 출력할 메시지
   */
  static #print(message) {
    Console.print(message);
  }

  /**
   * 차수별 실행 결과를 출력하는 메소드
   * @public
   * @static
   * @param {Array} allRoundHistory - 레이스 전체의 차수별 실행 결과 배열
   */
  static printAllRounds(allRoundHistory) {
    Output.#print(Output.#RESULT_MESSAGE);
    allRoundHistory.forEach((roundHistory) => Output.#printRound(roundHistory));
  }

  /**
   * 한 차수의 실행 결과를 출력하는 메소드
   * @private
   * @static
   * @param {Array} roundHistory - 한 차수의 실행 결과 배열
   */
  static #printRound(roundHistory) {
    roundHistory.forEach((car) => Output.#printPosition(car));
    Output.#print("");
  }

  /**
   * 차 하나의 위치를 출력하는 메소드
   * @private
   * @static
   * @param {{name: string, position: string}} car - 차 정보
   */
  static #printPosition(car) {
    const { name, position } = car;
    Output.#print(`${name} : ${Output.#PROGRESS_BAR.repeat(position)}`);
  }

  /**
   * 최종 우승자를 출력하는 메소드
   * @public
   * @static
   * @param {Array} winners - 우승자 목록
   */
  static printWinners(winners) {
    Output.#print(
      `${Output.#WINNER_MESSAGE}${winners.map((winner) => winner.name).join(", ")}`
    );
  }
}

export default Output;
