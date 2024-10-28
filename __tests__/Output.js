import getLogSpy from "../src/utils/test/getLogSpy.js";
import Output from "../src/view/Output.js";

describe("Output", () => {
  test.each([
    {
      input: [[{ name: "A", position: 0 }]],
      expected: [["실행 결과"], ["A : "], [""]],
    },
    {
      input: [
        [
          { name: "A", position: 0 },
          { name: "B", position: 1 },
        ],
      ],
      expected: [["실행 결과"], ["A : "], ["B : -"], [""]],
    },
    {
      input: [
        [
          { name: "A", position: 0 },
          { name: "B", position: 1 },
        ],
        [
          { name: "A", position: 1 },
          { name: "B", position: 2 },
        ],
      ],
      expected: [
        ["실행 결과"],
        ["A : "],
        ["B : -"],
        [""],
        ["A : -"],
        ["B : --"],
        [""],
      ],
    },
  ])("차수별 결과 출력 테스트", ({ input, expected }) => {
    const logSpy = getLogSpy();
    Output.printAllRounds(input);
    expect(logSpy.mock.calls).toEqual(expected);
  });

  test.each([
    {
      input: [{ name: "A", position: 1 }],
      expected: [["최종 우승자 : A"]],
    },
    {
      input: [
        { name: "A", position: 1 },
        { name: "B", position: 2 },
      ],
      expected: [["최종 우승자 : A, B"]],
    },
  ])("최종 우승자 출력 테스트", ({ input, expected }) => {
    const logSpy = getLogSpy();
    Output.printWinners(input);
    expect(logSpy.mock.calls).toEqual(expected);
  });
});
