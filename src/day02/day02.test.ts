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
})
