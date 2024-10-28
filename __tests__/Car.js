import { Random } from "@woowacourse/mission-utils";
import Car from "../src/model/Car.js";
import carNameValidator from "../src/validator/carNameValidator.js";
import CustomError from "../src/utils/CustomError.js";

describe("Car 테스트", () => {
  test.each([
    {
      input: "",
      expected: carNameValidator.NAME_RULE_SET.tooShort.errorMessage,
    },
    {
      input: "123456",
      expected: carNameValidator.NAME_RULE_SET.tooLong.errorMessage,
    },
  ])(
    "이름이 '$input'인 자동차를 생성하는 경우 '$expected' 메세지의 CustomError가 발생한다.",
    ({ input, expected }) => {
      expect(() => new Car(input)).toThrow(new CustomError(expected));
    }
  );

  test("이름이 'pobi'인 자동차를 생성하는 경우, {name: 'pobi', position: 0, positionHistory: [] } 인 자동차가 생성된다.", () => {
    const car = new Car("pobi");
    expect(car.info).toEqual({
      name: "pobi",
      position: 0,
      positionHistory: [],
    });
  });

  // Random.pickNumberInRange()를 모킹하여 number를 반환하도록 설정
  const mockPickNumberInRange = (number) => {
    Random.pickNumberInRange = jest.fn().mockReturnValueOnce(number);
  };

  test.each([
    {
      input: 4,
      expected: 1,
    },
    {
      input: 3,
      expected: 0,
    },
  ])(
    "임의의 숫자가 $input인 경우, 자동차는 $expected 만큼 전진한다.",
    ({ input, expected }) => {
      const car = new Car("pobi");
      mockPickNumberInRange(input);
      car.move();
      expect(car.info).toEqual({
        name: "pobi",
        position: expected,
        positionHistory: [expected],
      });
    }
  );
});
