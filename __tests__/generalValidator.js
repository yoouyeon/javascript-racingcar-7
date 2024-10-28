import CustomError from "../src/utils/CustomError.js";
import generalValidator from "../src/validator/generalValidator.js";

describe("generalValidator 테스트", () => {
  test.each([
    { input: "", expected: generalValidator.RULE_SET.empty.errorMessage },
    {
      input: " a",
      expected: generalValidator.RULE_SET.invalidCharacter.errorMessage,
    },
    {
      input: "가.",
      expected: generalValidator.RULE_SET.invalidCharacter.errorMessage,
    },
    {
      input: "0\t",
      expected: generalValidator.RULE_SET.invalidCharacter.errorMessage,
    },
  ])(
    "'$input' 입력은 '$expected' 메시지의 CustomError가 발생한다.",
    ({ input, expected }) => {
      expect(() => generalValidator.checkInput(input)).toThrow(
        new CustomError(expected)
      );
    }
  );

  test.each([
    { input: "자동차" },
    { input: "car" },
    { input: "000" },
    { input: "A가1" },
    { input: "철수,영희" },
  ])("'$input' 입력은 에러가 발생하지 않는다.", ({ input }) => {
    expect(() => generalValidator.checkInput(input)).not.toThrow(CustomError);
  });
});
