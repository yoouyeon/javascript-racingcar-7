import checkRuleSet from "./checkRuleSet.js";

const generalValidator = {
  RULE_SET: Object.freeze({
    empty: Object.freeze({
      isValid: (input) => input.length !== 0,
      errorMessage: "입력된 내용이 없습니다.",
    }),
    invalidCharacter: Object.freeze({
      isValid: (input) => /^[a-zA-Z0-9가-힣,]*$/.test(input),
      errorMessage: "한글, 영문, 숫자만 입력 가능합니다.",
    }),
  }),

  /**
   * @public
   * @param {string} input
   * @returns {void}
   * @throws {CustomError}
   * @description
   * 입력값이 유효한지 검사한다.
   */
  checkInput: (input) => {
    checkRuleSet(input, generalValidator.RULE_SET);
  },
};

export default generalValidator;
