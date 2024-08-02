import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function formatDateTime(inputValue: string) {
  return dayjs(inputValue).format('DD/MM/YYYY');
}
