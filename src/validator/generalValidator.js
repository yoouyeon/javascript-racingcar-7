import checkRuleSet from "./checkRuleSet";

const generalValidator = {
  RULE_SET: {
    empty: {
      isValid: (input) => input.length !== 0,
      errorMessage: "입력된 내용이 없습니다.",
    },
    invalidCharacter: {
      isValid: (input) => /^[a-zA-Z0-9가-힣]*$/.test(input),
      errorMessage: "한글, 영문, 숫자만 입력 가능합니다.",
    },
  },

  checkInput: (input) => {
    checkRuleSet(input, generalValidator.RULE_SET);
  },
};

export default generalValidator;
