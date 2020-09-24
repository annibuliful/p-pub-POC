export interface ICalendarLocale {
  locale: string;
  months: string[];
  weekdayLong: string[];
  weekdayShort: string[];
}
export const en: ICalendarLocale = {
  locale: "en",
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  weekdayLong: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturnday"
  ],
  weekdayShort: ["Sun", "M", "T", "W", "Tu", "F", "Sat"]
};

export const th: ICalendarLocale = {
  locale: "th",
  months: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม"
  ],
  weekdayLong: [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์"
  ],
  weekdayShort: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"]
};
