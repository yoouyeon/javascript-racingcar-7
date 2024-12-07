import Car from './Car.js';
import mockRandoms from './mockRandoms.js';

describe('자동차 테스트', () => {
  describe('이름 유효성 테스트', () => {
    test.each([
      { input: '', case: '빈 문자열인 경우' },
      { input: '123456', case: '5글자를 초과하는 경우' },
    ])('유효하지 않은 이름일 경우 에러를 던진다. ($case)', ({ input }) => {
      expect(() => new Car(input)).toThrow('[ERROR]');
    });

    test('유효한 이름일 경우 에러를 던지지 않는다.', () => {
      const validName = '12345';
      expect(() => new Car(validName)).not.toThrow();
    });
  });

  describe('자동차 전진 테스트', () => {
    test.each([{ random: 4 }, { random: 5 }])(
      `랜덤 값이 4 이상일 경우 전진한다. (랜덤 값: $random)`,
      ({ random }) => {
        // given
        const car = new Car('pobi');
        mockRandoms([random]);
        const expectedPosition = 1;

        // when
        car.move();

        // then
        expect(car.status.position).toBe(expectedPosition);
      }
    );

    test.each([{ random: 3 }, { random: 2 }])(
      `랜덤 값이 3 이하일 경우 전진하지 않는다. (랜덤 값: $random)`,
      ({ random }) => {
        // given
        const car = new Car('pobi');
        mockRandoms([random]);
        const expectedPosition = 0;

        // when
        car.move();

        // then
        expect(car.status.position).toBe(expectedPosition);
      }
    );
  });
});
