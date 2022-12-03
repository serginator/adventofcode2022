import day02 from './day02'

describe('Day 02 - Rock Paper Scissors', () => {
  const input = `A Y
      B X
      C Z
    `;
  it('getHandPoints', () => {
    expect(day02.getHandPoints('X')).toBe(1);
    expect(day02.getHandPoints('Y')).toBe(2);
    expect(day02.getHandPoints('Z')).toBe(3);
  });
  it('getGamePoints', () => {
    const hand = 1;
    expect(day02.getGamePoints('A', 'X', hand)).toBe(3 + hand);
    expect(day02.getGamePoints('B', 'Y', hand)).toBe(3 + hand);
    expect(day02.getGamePoints('C', 'Z', hand)).toBe(3 + hand);
    expect(day02.getGamePoints('C', 'X', hand)).toBe(6 + hand);
    expect(day02.getGamePoints('A', 'Y', hand)).toBe(6 + hand);
    expect(day02.getGamePoints('B', 'Z', hand)).toBe(6 + hand);
    expect(day02.getGamePoints('A', 'Z', hand)).toBe(0 + hand);
    expect(day02.getGamePoints('B', 'X', hand)).toBe(0 + hand);
    expect(day02.getGamePoints('C', 'Y', hand)).toBe(0 + hand);
  });
  it('part 1', () => {
    const expected = 15;
    expect(day02.part01(input)).toBe(expected);
  });

  it('getLosePoints', () => {
    expect(day02.getLosePoints('A')).toBe(3);
    expect(day02.getLosePoints('B')).toBe(1);
    expect(day02.getLosePoints('C')).toBe(2);
  });
  it('getDrawPoints', () => {
    expect(day02.getDrawPoints('A')).toBe(1);
    expect(day02.getDrawPoints('B')).toBe(2);
    expect(day02.getDrawPoints('C')).toBe(3);
  });
  it('getWinPoints', () => {
    expect(day02.getWinPoints('A')).toBe(2);
    expect(day02.getWinPoints('B')).toBe(3);
    expect(day02.getWinPoints('C')).toBe(1);
  });

  it('part 2', () => {
    const expected = 12;
    expect(day02.part02(input)).toBe(expected);
  });
})
