type Hand = {
  X: number,
  Y: number,
  Z: number,
}
type OpponentHand = {
  A: number,
  B: number,
  C: number,
}

const HandPoints: Hand = {
  X: 1,
  Y: 2,
  Z: 3,
}

const LosePoints: OpponentHand = {
  A: 3,
  B: 1,
  C: 2,
};

const DrawPoints: OpponentHand = {
  A: 1,
  B: 2,
  C: 3,
};

const WinPoints: OpponentHand = {
  A: 2,
  B: 3,
  C: 1,
};

const getHandPoints = (hand: string): number => {
  return HandPoints[hand as keyof Hand];
};

const getGamePoints = (opponent: string, player:string, hand: number): number => {
  if (
    (opponent === 'A' && player === 'X') ||
    (opponent === 'B' && player === 'Y') ||
    (opponent === 'C' && player === 'Z')
  ) {
    return 3 + hand;
  }

  if (
    (opponent === 'C' && player === 'X') ||
    (opponent === 'A' && player === 'Y') ||
    (opponent === 'B' && player === 'Z')
  ) {
    return 6 + hand;
  }
  return 0 + hand;
};

const part01 = (input: string): number => {
  const games = input.split(/\n/).map(line => line.replace(/\s/g, ''));
  const points = games.map(game => {
    if (game.length !== 2) {
      return 0;
    }
    const [opponent, player] = game.split('');

    const handPoints = getHandPoints(player);
    const gamePoints = getGamePoints(opponent, player, handPoints);

    return gamePoints;
  });
  return points.reduce((sum, number) => sum + number, 0);
};

const getLosePoints = (hand: string): number => {
  return LosePoints[hand as keyof OpponentHand];
};
const getDrawPoints = (hand: string): number => {
  return DrawPoints[hand as keyof OpponentHand];
};
const getWinPoints = (hand: string): number => {
  return WinPoints[hand as keyof OpponentHand];
};
const part02 = (input: string) => {
  const games = input.split(/\n/).map(line => line.replace(/\s/g, ''));
  const points = games.map(game => {
    if (game.length !== 2) {
      return 0;
    }
    const [opponent, roundEnd] = game.split('');

    let roundPoints = 0;
    let playerPoints = 0;
    if (roundEnd === 'X') { // lose
      roundPoints = 0;
      playerPoints = getLosePoints(opponent);
    } else if (roundEnd === 'Y') { // draw
      roundPoints = 3;
      playerPoints = getDrawPoints(opponent);
    } else if (roundEnd === 'Z') { // win
      roundPoints = 6;
      playerPoints = getWinPoints(opponent);
    }
    return roundPoints + playerPoints;
  });
  return points.reduce((sum, number) => sum + number, 0);
};

export default {
  getHandPoints,
  getGamePoints,
  getLosePoints,
  getDrawPoints,
  getWinPoints,
  part01,
  part02
};
