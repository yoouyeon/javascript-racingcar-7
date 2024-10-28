class Race {
  #carCollection;

  #tryCount;

  constructor(carCollection, tryCount) {
    this.#carCollection = carCollection;
    this.#tryCount = tryCount;
  }

  /**
   * @public
   * @returns {void}
   * @description
   * tryCount만큼 레이스에 참가하는 각 자동차들을 이동시킨다.
   */
  start() {
    for (let count = 0; count < this.#tryCount; count += 1) {
      this.#carCollection.forEach((car) => car.move());
    }
  }

  /**
   * @getter
   * @returns {Object} 레이스 결과 (winners: 우승자, history: 레이스 진행 기록)
   * @description
   * 레이스 결과를 반환한다.
   */
  get result() {
    const winners = this.#getWinners();
    const history = this.#getHistory();
    return { winners, history };
  }

  /**
   * @private
   * @returns {Array} 우승자 목록
   */
  #getWinners() {
    const maxPosition = Math.max(
      ...this.#carCollection.map((car) => car.info.position)
    );

    return this.#carCollection
      .filter((car) => car.info.position === maxPosition)
      .map((car) => {
        const { name, position } = car.info;
        return { name, position };
      });
  }

  /**
   * @private
   * @returns {Array} 레이스 진행 기록
   * @description
   * 각 시도별 자동차들의 위치 정보를 가져와 레이스 진행 기록을 반환한다.
   */
  #getHistory() {
    const history = Array.from({ length: this.#tryCount }, (_, count) =>
      this.#carCollection.map((car) => {
        const { name, positionHistory } = car.info;
        return { name, position: positionHistory[count] };
      })
    );
    return history;
  }
}

export default Race;
