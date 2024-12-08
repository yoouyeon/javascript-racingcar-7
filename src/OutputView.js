// @ts-check

import { Console } from '@woowacourse/mission-utils';

/** @typedef {import('./Car.js').default} CarType */
const OutputView = {
  RESULT_HEADER_MESSAGE: '\n실행 결과',

  printResultHeader: () => {
    Console.print(OutputView.RESULT_HEADER_MESSAGE);
  },

  printNewLine: () => {
    Console.print('');
  },

  /**
   * @param {CarType} car - 자동차 객체
   */
  printCarState: (car) => {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  },

  /**
   * @param {CarType[]} winners - 우승자 배열
   */
  printWinners: (winners) => {
    const winnerNames = winners.map((car) => car.name).join(', ');
    Console.print(`최종 우승자 : ${winnerNames}`);
  },
};

export default OutputView;
