import CustomError from "../utils/CustomError.js";

/**
 * @public
 * @param {any} target
 * @param {Object} ruleSet
 * @returns {void}
 * @throws {CustomError}
 * @description
 * target이 ruleSet의 규칙을 모두 만족하는지 검사한다.
 */
const checkRuleSet = (target, ruleSet) => {
  Object.values(ruleSet).forEach((rule) => {
    if (!rule.isValid(target)) {
      throw new CustomError(rule.errorMessage);
    }
  });
};

export default checkRuleSet;
