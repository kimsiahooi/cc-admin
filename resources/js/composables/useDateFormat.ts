import { format } from 'date-fns';

export const useDateFormat = () => {
  return (date: Date | undefined | null) => {
    if (!date) {
      return date;
    }

    return format(date, 'ccc d MMM yyyy hh:mmaaa');
  };
};
