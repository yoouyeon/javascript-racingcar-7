class CustomError extends Error {
  static #MESSAGE_PREFIX = "[ERROR] ";

  /**
   * 에러 메시지 앞에 prefix를 추가한 에러 객체 생성
   * @constructor
   * @param {String} message - 에러 메시지
   */
  constructor(message) {
    super(CustomError.#MESSAGE_PREFIX + message);
  }
}

export default CustomError;
