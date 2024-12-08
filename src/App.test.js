import App from './App.js';
import Car from './Car.js';
import mockRandoms from './mockRandoms.js';

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
      const carNamesArray = ['pobi', 'woni'];

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

  describe('우승자 판별 테스트', () => {
    const GO = 4;
    const mockCar = (name, position) => {
      const car = new Car(name);
      mockRandoms(Array.from({ length: position }, () => GO));
      while (car.status.position < position) {
        car.move();
      }
      return car;
    };

    test('우승자가 1명인 경우 우승자를 판별할 수 있다.', () => {
      // given
      const car1 = mockCar('pobi', 4);
      const car2 = mockCar('woni', 3);
      const car3 = mockCar('jun', 2);
      const cars = [car1, car2, car3];

      // when
      const winners = App.getWinners(cars);

      // then
      expect(winners).toEqual([car1]);
    });

    test('우승자가 2명 이상인 경우 우승자를 판별할 수 있다.', () => {
      // given
      const car1 = mockCar('pobi', 4);
      const car2 = mockCar('woni', 4);
      const car3 = mockCar('jun', 2);
      const cars = [car1, car2, car3];

      // when
      const winners = App.getWinners(cars);

      // then
      expect(winners).toEqual([car1, car2]);
    });
  });
});
