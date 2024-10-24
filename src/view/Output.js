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

  // TODO : 타입 정의 필요함
  /**
   * 차수별 실행 결과를 출력하는 메소드
   * @param {*} allRoundHistory
   */
  static printAllRounds(allRoundHistory) {
    Output.#print(Output.#RESULT_MESSAGE);
    allRoundHistory.forEach((roundHistory) => Output.#printRound(roundHistory));
  }

  static #printRound(roundHistory) {
    roundHistory.forEach((car) => Output.#printPosition(car));
    Output.#print("");
  }

  static #printPosition(car) {
    const { name, distance } = car;
    Output.#print(`${name} : ${Output.#PROGRESS_BAR.repeat(distance)}`);
  }

  /**
   * 최종 우승자를 출력하는 메소드
   * @param {Array<Array<{name: string, distance: string}>>} winners
   */
  static printWinners(winners) {
    Output.#print(
      `${Output.#WINNER_MESSAGE}${winners.map((winner) => winner.name).join(", ")}`
    );
  }
}

export default Output;
