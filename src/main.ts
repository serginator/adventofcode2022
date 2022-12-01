import path from 'path';
import fs from 'fs';

import day01 from './day01/day01';
const input01 = fs.readFileSync(path.join(__dirname, './day01/input.txt'), 'utf-8');

(() => {
  console.log({
    day01: {
      part01: day01.part01(input01),
      part02: day01.part02(input01)
    }
  })
})();
