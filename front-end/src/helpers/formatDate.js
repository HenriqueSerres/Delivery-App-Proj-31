import { formatNumber } from './formatNumber';

const formatDate = (date) => {
  if (!(date instanceof Date)) return 'is not a date';
  const day = formatNumber(date.getUTCDate());
  const month = formatNumber(date.getUTCMonth() + 1);
  const year = formatNumber(date.getUTCFullYear());
  return `${day}/${month}/${year}`;
};

export default formatDate;
