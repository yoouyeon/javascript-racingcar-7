class Race {
  #carCollection;

  #tryCount;

  constructor(carCollection, tryCount) {
    this.#carCollection = carCollection;
    this.#tryCount = tryCount;
  }

  start() {
    for (let count = 0; count < this.#tryCount; count += 1) {
      this.#carCollection.forEach((car) => car.move());
    }
  }

  get result() {
    const winners = this.#getWinners();
    const history = this.#getHistory();
    return { winners, history };
  }

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
