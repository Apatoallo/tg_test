import moment from 'moment';

export interface WorkingHoursInfo {
  opened: boolean;
  openedAt: string;
  closeAt: string;
}
export interface NameValue {
  name: string;
  value: number;
}
export const OPEN_24 = 'Open 24 hours';
export const DAYS_NAMES: NameValue[] = [
  { name: 'monday', value: 1 },
  { name: 'monday.', value: 1 },
  { name: 'mon', value: 1 },
  { name: 'mon.', value: 1 },
  { name: 'tuesday', value: 2 },
  { name: 'tuesday.', value: 2 },
  { name: 'tu', value: 2 },
  { name: 'tu.', value: 2 },
  { name: 'tue', value: 2 },
  { name: 'tue.', value: 2 },
  { name: 'tues', value: 2 },
  { name: 'tues.', value: 2 },
  { name: 'wednesday', value: 3 },
  { name: 'wednesday.', value: 3 },
  { name: 'wed', value: 3 },
  { name: 'wed.', value: 3 },
  { name: 'thursday', value: 4 },
  { name: 'thursday.', value: 4 },
  { name: 'th', value: 4 },
  { name: 'th.', value: 4 },
  { name: 'thu', value: 4 },
  { name: 'thu.', value: 4 },
  { name: 'thur', value: 4 },
  { name: 'thur.', value: 4 },
  { name: 'thurs', value: 4 },
  { name: 'thurs.', value: 4 },
  { name: 'friday', value: 5 },
  { name: 'friday.', value: 5 },
  { name: 'fri', value: 5 },
  { name: 'fri.', value: 5 },
  { name: 'saturday', value: 6 },
  { name: 'saturday.', value: 6 },
  { name: 'sat', value: 6 },
  { name: 'sat.', value: 6 },
  { name: 'sunday', value: 7 },
  { name: 'sunday.', value: 7 },
  { name: 'sun', value: 7 },
  { name: 'sun.', value: 7 },
];

export const getWorkingHoursInfo = (
  workingTiming: string | undefined,
  workingDays: string | undefined,
  currentDate?: Date,
): WorkingHoursInfo => {
  if (workingDays === OPEN_24) {
    return {
      opened: true,
      openedAt: '',
      closeAt: '',
    };
  }

  if (!workingTiming || !workingDays) {
    return {
      opened: false,
      openedAt: '',
      closeAt: '',
    };
  }

  // Day
  let startDay: number = -1;
  let endDay: number = -1;
  // Single day
  const singleDay = DAYS_NAMES.find(
    i => workingDays.toLowerCase().trim() === i.name,
  );
  if (singleDay) {
    startDay = singleDay.value;
    endDay = singleDay.value;
  } else {
    // Interval
    const dayArr = workingDays.split('-');
    if (dayArr.length === 2) {
      const startDayFound = DAYS_NAMES.find(
        i => dayArr[0].toLowerCase().trim() === i.name,
      );
      if (startDayFound) {
        startDay = startDayFound.value;
      }
      const endDayFound = DAYS_NAMES.find(
        i => dayArr[1].toLowerCase().trim() === i.name,
      );
      if (endDayFound) {
        endDay = endDayFound.value;
      }
    }
  }

  // Time
  let splitArr = workingTiming.split('-');
  let opened = false;
  let openedAt;
  let closeAt;
  if (splitArr.length !== 2) {
    splitArr = workingTiming.split('to');
  }
  if (splitArr.length === 2) {
    try {
      const t1 = moment(splitArr[0], ['h:m a', 'H:m']);
      const t2 = moment(splitArr[1], ['h:m a', 'H:m']);
      const tNow = currentDate ? moment(currentDate) : moment();
      let dayNow = tNow.day();
      if (dayNow === 0) {
        dayNow = 7;
      }
      let dayMatch;
      if (startDay > endDay) {
        dayMatch =
          (dayNow >= startDay && dayNow <= 7) ||
          (dayNow > 0 && dayNow <= endDay);
      } else {
        dayMatch = dayNow >= startDay && dayNow <= endDay;
      }
      opened = getTime(tNow).isBetween(getTime(t1), getTime(t2)) && dayMatch;
      openedAt = t1.format('H:mm');
      closeAt = t2.format('H:mm');
    } catch (e) {}
  }
  return {
    opened: opened,
    openedAt: openedAt ? openedAt : '',
    closeAt: closeAt ? closeAt : '',
  };
};

const getTime = (mom: moment.Moment): moment.Moment => {
  return moment({ h: mom.hours(), m: mom.minutes() });
};

export const msToTime = (s: number) => {
  const pad = (n: number, z?: number) => {
    z = z || 2;
    return ('00' + n).slice(-z);
  };

  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;
  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
};

export const parseDate = (date: string) => {
  return moment(date, 'DD/MM/YYYY');
};

export const parseDateTime = (date: string, showFull = false) => {
  return moment(date, 'DD/MM/YYYY hh:mm:ss A').format(
    showFull ? 'DD MMMM YYYY, hh:mm' : 'DD MMM hh:mm A',
  );
};
