type FnType = (a: string, b: string) => boolean;

const checkOverlapping = (a: string, b: string): boolean => {
  const [a1, a2] = a.split('-').map(Number);
  const [b1, b2] = b.split('-').map(Number);
  return (a1 <= b1 && a2 >= b2) || (a1 >= b1 && a2 <= b2);
};

const checkAnyOverlapping = (a: string, b: string): boolean => {
  const [a1, a2] = a.split('-').map(Number);
  const [b1, b2] = b.split('-').map(Number);
  // check if any number of the ranges overlap
  return (
    (a1 <= b1 && a2 >= b1) ||
    (a1 <= b2 && a2 >= b2)
  );
};

const handleClearing = (input: string, fn: FnType): number => {
  const pairOfWorkers = input.split(/\n/).map(line => line.replace(/\s/g, ''));
  const overlapping = pairOfWorkers.filter(pair => {
    if (pair.length === 0) {
      return false;
    }
    const [a, b] = pair.split(',');
    return fn(a, b);
  });

  return overlapping.length;
};

const part01 = (input: string): number => {
  return handleClearing(input, checkOverlapping);
};
const part02 = (input: string): number => {
  return handleClearing(input, checkAnyOverlapping);
};

export default {
  checkOverlapping,
  checkAnyOverlapping,
  part01,
  part02
};
