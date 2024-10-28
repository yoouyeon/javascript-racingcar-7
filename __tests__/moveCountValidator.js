import CustomError from "../src/utils/CustomError.js";
import moveCountValidator from "../src/validator/moveCountValidator.js";

describe("moveCountValidator 테스트", () => {
  test.each([
    {
      input: "a",
      expected: moveCountValidator.RULE_SET.notNumber.errorMessage,
    },
    {
      input: "1.1",
      expected: moveCountValidator.RULE_SET.notInteger.errorMessage,
    },
    {
      input: "-1",
      expected: moveCountValidator.RULE_SET.notPositive.errorMessage,
    },
  ])(
    "이동 시도 횟수 '$input'은 '$expected' 메시지의 CustomError가 발생한다.",
    ({ input, expected }) => {
      expect(() => moveCountValidator.checkCount(input)).toThrow(
        new CustomError(expected)
      );
    }
  );

  test.each([{ input: "1" }, { input: "100" }])(
    "이동 시도 횟수 '$input'은 에러가 발생하지 않는다.",
    ({ input }) => {
      expect(() => moveCountValidator.checkCount(input)).not.toThrow(
        CustomError
      );
    }
  );
});
