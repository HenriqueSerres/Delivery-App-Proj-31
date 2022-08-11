import { formatNumber } from './formatNumber';

const formatDate = (date) => {
  if(!(date instanceof Date)) return 'is not a date';
  const day = formatNumber(date.getDay());
  const month = formatNumber(date.getMonth());
  const year = formatNumber(date.getFullYear());
  return `${day}/${month}/${year}`;
};

export default formatDate;
