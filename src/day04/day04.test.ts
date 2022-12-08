import day04 from './day04'

describe('Day 04 - Camp Cleanup', () => {
  const input = `2-4,6-8
    2-3,4-5
    5-7,7-9
    2-8,3-7
    6-6,4-6
    2-6,4-8`;
  it('checkOverlapping', () => {
    expect(day04.checkOverlapping('2-4', '6-8')).toBe(false);
    expect(day04.checkOverlapping('2-3', '4-5')).toBe(false);
    expect(day04.checkOverlapping('5-7', '7-9')).toBe(false);
    expect(day04.checkOverlapping('2-8', '3-7')).toBe(true);
    expect(day04.checkOverlapping('6-6', '4-6')).toBe(true);
    expect(day04.checkOverlapping('2-6', '4-8')).toBe(false);
  });
  it('part 1', () => {
    const expected = 2;
    expect(day04.part01(input)).toBe(expected);
    expect(day04.part01('')).toBe(0);
  });

  it('checkAnyOverlapping', () => {
    expect(day04.checkAnyOverlapping('2-4', '6-8')).toBe(false);
    expect(day04.checkAnyOverlapping('2-3', '4-5')).toBe(false);
    expect(day04.checkAnyOverlapping('5-7', '7-9')).toBe(true);
    expect(day04.checkAnyOverlapping('2-8', '3-7')).toBe(true);
    expect(day04.checkAnyOverlapping('6-6', '4-6')).toBe(true);
    expect(day04.checkAnyOverlapping('2-6', '4-8')).toBe(true);
  })

  it('part 2', () => {
    const expected = 4;
    expect(day04.part02(input)).toBe(expected);
    expect(day04.part02('')).toBe(0);
  });
})
