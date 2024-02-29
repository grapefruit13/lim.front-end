import { format } from 'date-fns';

const formatDate = (date: Date) => {
  const formattedDate = format(date, 'MMM dd, yyyy');
  return formattedDate;
};

export default formatDate;
