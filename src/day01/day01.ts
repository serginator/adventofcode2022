const getSumsByGroup = (input: string): number[] => {
  const groups = input.split(/\n\s*\n/);
  const sums = groups.map(group => {
    const numbers = group.split(/\s+/).map(Number);
    return numbers.reduce((sum, number) => sum + number, 0);
  });

  return sums;
};


const part01 = (input: string): number => {
  const sums = getSumsByGroup(input);
  // return the biggest one
  return Math.max(...sums);
};
const part02 = (input: string): number => {
  const sums = getSumsByGroup(input);
  // sort the sums, get the three largest and sum them
  return sums.sort((a, b) => b - a).slice(0, 3).reduce((sum, number) => sum + number, 0);
};

export default {
  part01,
  part02
};
