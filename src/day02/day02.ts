const part01 = (input: string): number => {
  const games = input.split(/\n/).map(line => line.replace(/\s/g, ''));
  const points = games.map(game => {
    const [opponent, player] = game.split('');

    let hand = 0;
    if (player === 'X') {
      hand = 1;
    } else if (player === 'Y') {
      hand = 2;
    } else if (player === 'Z') {
      hand = 3;
    }

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
  });
  return points.reduce((sum, number) => sum + number, 0);
};
const part02 = (input: string) => {
  const games = input.split(/\n/).map(line => line.replace(/\s/g, ''));
  const points = games.map(game => {
    const [opponent, roundEnd] = game.split('');

    let roundPoints = 0;
    let playerPoints = 0;
    if (roundEnd === 'X') { // lose
      roundPoints = 0;
      if (opponent === 'A') {
        playerPoints = 3;
      } else if (opponent === 'B') {
        playerPoints = 1;
      } else if (opponent === 'C') {
        playerPoints = 2;
      }
    } else if (roundEnd === 'Y') { // draw
      roundPoints = 3;
      if (opponent === 'A') {
        playerPoints = 1;
      } else if (opponent === 'B') {
        playerPoints = 2;
      } else if (opponent === 'C') {
        playerPoints = 3;
      }
    } else if (roundEnd === 'Z') { // win
      roundPoints = 6;
      if (opponent === 'A') {
        playerPoints = 2;
      } else if (opponent === 'B') {
        playerPoints = 3;
      } else if (opponent === 'C') {
        playerPoints = 1;
      }
    }
    return roundPoints + playerPoints;
  });
  return points.reduce((sum, number) => sum + number, 0);
};

export default {
  part01,
  part02
};
