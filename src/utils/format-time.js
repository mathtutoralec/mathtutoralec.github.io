import {
  format,
  getTime,
  formatDistanceToNow,
  isSameDay,
  isSameMonth,
  getYear,
} from "date-fns";

// ----------------------------------------------------------------------

export function fDate(date, newFormat) {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : "";
}

export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : "";
}

export function shortDateLabel(startDate, endDate) {
  const getCurrentYear = new Date().getFullYear();

  const startDateYear = startDate ? getYear(startDate) : null;

  const endDateYear = endDate ? getYear(endDate) : null;

  const currentYear =
    getCurrentYear === startDateYear && getCurrentYear === endDateYear;

  const sameDay =
    startDate && endDate
      ? isSameDay(new Date(startDate), new Date(endDate))
      : false;

  const sameMonth =
    startDate && endDate
      ? isSameMonth(new Date(startDate), new Date(endDate))
      : false;

  if (currentYear) {
    if (sameMonth) {
      if (sameDay) {
        return fDate(endDate, "dd MMM yy");
      }
      return `${fDate(startDate, "dd")} - ${fDate(endDate, "dd MMM yy")}`;
    }
    return `${fDate(startDate, "dd MMM")} - ${fDate(endDate, "dd MMM yy")}`;
  }

  return `${fDate(startDate, "dd MMM yy")} - ${fDate(endDate, "dd MMM yy")}`;
}
