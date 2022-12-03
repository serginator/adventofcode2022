import day03 from './day03'

describe('Day 03 - Rucksack Reorganization', () => {
  const input = `vJrwpWtwJgWrhcsFMMfFFhFp
  jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
  PmmdzqPrVvPwwTWBwg
  wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
  ttgJtRGJQctTZtZT
  CrZsJsPPZsGzwwsLwLmpwMDw`;
  it('part 1', () => {
    const expected = 157;
    expect(day03.part01(input)).toBe(expected);
  });

  it('part 2', () => {
    const expected = 70;
    expect(day03.part02(input)).toBe(expected);
  });
})
