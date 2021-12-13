import { DateTime } from 'luxon';

export const formatDate = (date, format = 'dd LLL yyyy') => {
	return DateTime.fromISO(date).toFormat(format);
};
