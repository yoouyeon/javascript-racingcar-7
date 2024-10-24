class RaceEngine {
  #raceHistory;

  #winners;

  // NOTE : raceHistory와 winners를 엔진에서 관리할 것인지 고민이 필요함.
  constructor() {
    this.#raceHistory = [];
    this.#winners = [];
  }

  // TODO : 타입 정의 필요함.
  /**
   * @param {number} tryCount - 각 자동차가 전진을 시도하는 횟수
   * @param {Array<*>} carCollection - 경주에 참여하는 자동차 객체들의 배열
   */
  start(tryCount, carCollection) {
    for (let i = 0; i < tryCount; i += 1) {
      this.#race(carCollection);
    }
    this.#decideWinner(carCollection);

    return this.result;
  }

  get result() {
    return { history: this.#raceHistory, winners: this.#winners };
  }

  /**
   * 1회차 경주를 하고 그 결과를 저장하는 메서드
   * @param {Array<*>} carCollection - 경주에 참여하는 자동차 객체들의 배열
   */
  #race(carCollection) {
    const currentRaceResult = [];
    carCollection.forEach((car) => {
      car.move();
      currentRaceResult.push(car.currentInfomation);
    });
    this.#raceHistory.push(currentRaceResult);
  }

  /**
   * 우승자 목록을 반환하는 메서드
   * @param {Array<*>} carCollection - 경주에 참여하는 자동차 객체들의 배열
   */
  #decideWinner(carCollection) {
    const maxDistance = Math.max(
      ...carCollection.map((car) => car.currentInfomation.distance)
    );
    this.#winners = carCollection.filter(
      (car) => car.currentInfomation.distance === maxDistance
    );
  }
}

export default RaceEngine;
