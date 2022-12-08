import path from 'path';
import fs from 'fs';

import day01 from './day01/day01';
const input01 = fs.readFileSync(path.join(__dirname, './day01/input.txt'), 'utf-8');
import day02 from './day02/day02';
const input02 = fs.readFileSync(path.join(__dirname, './day02/input.txt'), 'utf-8');
import day03 from './day03/day03';
const input03 = fs.readFileSync(path.join(__dirname, './day03/input.txt'), 'utf-8');
import day04 from './day04/day04';
const input04 = fs.readFileSync(path.join(__dirname, './day04/input.txt'), 'utf-8');

(() => {
  console.log({
    day01: {
      part01: day01.part01(input01),
      part02: day01.part02(input01)
    },
    day02: {
      part01: day02.handleGame(input02, day02.part01),
      part02: day02.handleGame(input02, day02.part02)
    },
    day03: {
      part01: day03.part01(input03),
      part02: day03.part02(input03)
    },
    day04: {
      part01: day04.part01(input04),
      part02: day04.part02(input04)
    }
  })
})();
