import App from './App.js';

describe('자동차 경주 테스트', () => {
  describe('자동차 수 유효성 테스트', () => {
    test('자동차가 1대 이하인 경우 에러를 던진다.', () => {
      // given
      const carNamesArray = ['pobi'];

      // when, then
      expect(() => App.validateCarCount(carNamesArray)).toThrow('[ERROR]');
    });

    test('자동차가 2대 이상인 경우 에러를 던지지 않는다.', () => {
      // given
      const carNamesArray = ['pobi', 'crong'];

      // when, then
      expect(() => App.validateCarCount(carNamesArray)).not.toThrow();
    });
  });

  describe('시도 횟수 유효성 테스트', () => {
    test.each([
      { input: 0, case: '0인 경우' },
      { input: -1, case: '음수인 경우' },
      { input: '3a', case: '문자열인 경우' },
    ])('시도 횟수가 유효하지 않은 경우 에러를 던진다. ($case)', ({ input }) => {
      // when, then
      expect(() => App.validateTryCount(input)).toThrow('[ERROR]');
    });

    test('시도 횟수가 유효한 경우 에러를 던지지 않는다.', () => {
      // given
      const tryCount = 3;

      // when, then
      expect(() => App.validateTryCount(tryCount)).not.toThrow();
    });
  });
});
