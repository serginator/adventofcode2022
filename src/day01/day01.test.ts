import day01 from './day01'

describe('Day 01 - Calorie Counter', () => {
  const input = `1000
      2000
      3000

      4000

      5000
      6000

      7000
      8000
      9000

      10000
    `;
  it('part 1', () => {
    const expected = 24000;
    expect(day01.part01(input)).toBe(expected);
  });

  it('part 2', () => {
    const expected = 45000;
    expect(day01.part02(input)).toBe(expected);
  });
})
