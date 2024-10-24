import getLogSpy from "./getLogSpy";
import Output from "../src/view/Output";

describe("Output", () => {
  test.each([
    {
      input: [[{ name: "A", distance: 0 }]],
      expected: [["실행 결과\n"], ["A : \n"], ["\n"]],
    },
    {
      input: [
        [
          { name: "A", distance: 0 },
          { name: "B", distance: 1 },
        ],
      ],
      expected: [["실행 결과\n"], ["A : \n"], ["B : -\n"], ["\n"]],
    },
    {
      input: [
        [
          { name: "A", distance: 0 },
          { name: "B", distance: 1 },
        ],
        [
          { name: "A", distance: 1 },
          { name: "B", distance: 2 },
        ],
      ],
      expected: [
        ["실행 결과\n"],
        ["A : \n"],
        ["B : -\n"],
        ["\n"],
        ["A : -\n"],
        ["B : --\n"],
        ["\n"],
      ],
    },
  ])("차수별 결과 출력 테스트", ({ input, expected }) => {
    const logSpy = getLogSpy();
    Output.printAllRounds(input);
    expect(logSpy.mock.calls).toEqual(expected);
  });

  test.each([
    {
      input: [{ name: "A", distance: 1 }],
      expected: [["최종 우승자 : "], ["A\n"]],
    },
    {
      input: [
        { name: "A", distance: 1 },
        { name: "B", distance: 2 },
      ],
      expected: [["최종 우승자 : "], ["A, B\n"]],
    },
  ])("최종 우승자 출력 테스트", ({ input, expected }) => {
    const logSpy = getLogSpy();
    Output.printWinners(input);
    expect(logSpy.mock.calls).toEqual(expected);
  });
});
