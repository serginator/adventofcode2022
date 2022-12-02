import day02 from './day02'

describe('Day 02 - Rock Paper Scissors', () => {
  const input = `A Y
      B X
      C Z
    `;
  it('part 1', () => {
    const expected = 15;
    expect(day02.part01(input)).toBe(expected);
  });

  it('part 2', () => {
    const expected = 12;
    expect(day02.part02(input)).toBe(expected);
  });
  const inputAllCases = `A X
      B Y
      C Z
      A Y
      B X
      C X
      A Z
      B Z
      C Y
    `;
  it ('test all options part1', () => {
    const expected = 45;
    expect(day02.part01(inputAllCases)).toBe(expected);
  });
  it ('test all options part2', () => {
    const expected = 45;
    expect(day02.part02(inputAllCases)).toBe(expected);
  });
})
