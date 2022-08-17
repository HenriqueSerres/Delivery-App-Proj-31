export const formatNumber = (number) => {
  let result = number;
  if (String(number).length === 1) {
    result = `0${number}`;
  }
  return result;
};

export const formatOrderNumber = (number) => {
  const { length } = String(number);
  if (typeof number !== 'number') return 'NaN';
  switch (true) {
  case length === 1:
    return `00${number}`;

  case length === 2:
    return `0${number}`;

  default:
    return String(number);
  }
};
