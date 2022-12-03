const itemPriority = (item: string): number => {
  if (item === '') {
    return 0;
  } else {
    const charCode = item.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      return charCode - 96;
    }
    if (charCode >= 65 && charCode <= 90) {
      return charCode - 38;
    }
    return 0;
  }
};

const part01 = (input: string): number => {
  const rucksacks = input.split(/\n/).map(line => line.replace(/\s/g, ''));
  const priorities = rucksacks.map(rucksack => {
    const compartmentLength = rucksack.length / 2;
    const compartment1 = rucksack.substr(0, compartmentLength);
    const compartment2 = rucksack.substr(compartmentLength);

    let item = '';
    for (let i = 0; i < compartmentLength; i++) {
      const letter = compartment1[i];
      if (compartment2.includes(letter)) {
        item = letter;
        break;
      }
    }

    return itemPriority(item);
  });

  return priorities.reduce((sum, number) => sum + number, 0);
};
const part02 = (input: string): number => {
  const rucksacks = input.split(/\n/).map(line => line.replace(/\s/g, ''));
  // for each three rucksacks, find the item that is in all three
  const priorities = rucksacks.map((rucksack, index) => {
    if (index % 3 === 0) {
      const rucksack1 = rucksack;
      const rucksack2 = rucksacks[index + 1];
      const rucksack3 = rucksacks[index + 2];

      let item = '';
      for (let i = 0; i < rucksack1.length; i++) {
        const letter = rucksack1[i];
        if (rucksack2.includes(letter) && rucksack3.includes(letter)) {
          item = letter;
          break;
        }
      }

      return itemPriority(item);
    }
    return 0;
  });

  return priorities.reduce((sum, number) => sum + number, 0);
};

export default {
  itemPriority,
  part01,
  part02
};
