import checkRuleSet from "./checkRuleSet.js";

const carNameValidator = {
  NAME_RULE_SET: Object.freeze({
    tooShort: Object.freeze({
      isValid: (name) => name.length >= 1,
      errorMessage: "자동차 이름은 최소 1글자 이상이어야 합니다.",
    }),
    tooLong: Object.freeze({
      isValid: (name) => name.length <= 5,
      errorMessage: "자동차 이름은 최대 5글자 이하여야 합니다.",
    }),
  }),

  LIST_RULE_SET: Object.freeze({
    empty: Object.freeze({
      isValid: (list) => list.length > 0,
      errorMessage: "경주할 자동차의 이름을 1대 이상 입력하세요.",
    }),
    duplicate: Object.freeze({
      isValid: (list) => {
        const set = new Set(list);
        return set.size === list.length;
      },
      errorMessage: "자동차들의 이름은 중복될 수 없습니다.",
    }),
  }),

  /**
   * @public
   * @param {string} name
   * @returns {void}
   * @throws {CustomError}
   * @description
   * 자동차 이름의 길이가 유효한지 검사한다.
   */
  checkLength: (name) => {
    checkRuleSet(name, carNameValidator.NAME_RULE_SET);
  },

  /**
   * @public
   * @param {Array} list
   * @returns {void}
   * @throws {CustomError}
   * @description
   * 자동차 이름 목록이 유효한지 검사한다.
   */
  checkList: (list) => {
    checkRuleSet(list, carNameValidator.LIST_RULE_SET);
  },
};

export default carNameValidator;
