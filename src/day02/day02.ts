const getHandPoints = (hand: string): number => {
  let points = 0;
  if (hand === 'X') {
    points = 1;
  } else if (hand === 'Y') {
    points = 2;
  } else if (hand === 'Z') {
    points = 3;
  }
  return points;
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
    const [opponent, player] = game.split('');

    const handPoints = getHandPoints(player);
    const gamePoints = getGamePoints(opponent, player, handPoints);

    return gamePoints;
  });
  return points.reduce((sum, number) => sum + number, 0);
};

const getLosePoints = (opponent: string): number => {
  let points = 0;
  if (opponent === 'A') {
    points = 3;
  } else if (opponent === 'B') {
    points = 1;
  } else if (opponent === 'C') {
    points = 2;
  }
  return points;
};
const getDrawPoints = (opponent: string): number => {
  let points = 0;
  if (opponent === 'A') {
    points = 1;
  } else if (opponent === 'B') {
    points = 2;
  } else if (opponent === 'C') {
    points = 3;
  }
  return points;
};
const getWinPoints = (opponent: string): number => {
  let points = 0;
  if (opponent === 'A') {
    points = 2;
  } else if (opponent === 'B') {
    points = 3;
  } else if (opponent === 'C') {
    points = 1;
  }
  return points;
};
const part02 = (input: string) => {
  const games = input.split(/\n/).map(line => line.replace(/\s/g, ''));
  const points = games.map(game => {
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
