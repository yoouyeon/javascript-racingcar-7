import { Console } from '@woowacourse/mission-utils';

const InputView = {
  CAR_NAME_INPUT_MESSAGE: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT_INPUT_MESSAGE: '시도할 횟수는 몇회인가요?\n',

  readCarNames: async () => {
    const input = await Console.readlineAsync(InputView.CAR_NAME_INPUT_MESSAGE);
    return input;
  },

  readTryCount: async () => {
    const input = await Console.readlineAsync(InputView.TRY_COUNT_INPUT_MESSAGE);
    return input;
  },
};
