export const formatNumber = (number) => {
  let result = number;
  if (String(number).length === 1) {
    result = `0${number}`;
  }
  return result;
};

export const formatOrderNumber = (number) => {
  const one = 1;
  const two = 2;
  const three = 3;
  const { length } = String(number);
  if (typeof number !== 'number') return 'NaN';
  switch (true) {
  case length === one:
    return `000${number}`;

  case length === two:
    return `00${number}`;

  case length === three:
    return `0${number}`;

  default:
    return String(number);
  }
};
