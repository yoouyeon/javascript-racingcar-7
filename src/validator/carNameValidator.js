import checkRuleSet from "./checkRuleSet.js";

const carNameValidator = {
  NAME_RULE_SET: {
    tooShort: {
      isValid: (name) => name.length >= 1,
      errorMessage: "자동차 이름은 최소 1글자 이상이어야 합니다.",
    },
    tooLong: {
      isValid: (name) => name.length <= 5,
      errorMessage: "자동차 이름은 최대 5글자 이하여야 합니다.",
    },
  },

  checkLength: (name) => {
    checkRuleSet(name, carNameValidator.NAME_RULE_SET);
  },
};

export default carNameValidator;
