export const nextDay = (date) => {
  const d = date.day;

  const m = date.month - 1;
  const y = date.year;

  const nextday = new Date(y, m, d, "00", "00", "00");

  let current = nextday.getDate();

  nextday.setDate(current + 1);

  const day = nextday.getDate();
  const month = nextday.getMonth() + 1;
  const year = nextday.getFullYear();

  const mnth = [12];

  mnth[0] = "January";
  mnth[1] = "February";
  mnth[2] = "March";
  mnth[3] = "April";
  mnth[4] = "May";
  mnth[5] = "June";
  mnth[6] = "July";
  mnth[7] = "August";
  mnth[8] = "September";
  mnth[9] = "October";
  mnth[10] = "November";
  mnth[11] = "December";
  var mm = mnth[nextday.getMonth()];

  const weekday = [7];
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var dd = weekday[nextday.getDay() - 1];
  return { day: day, month: month, year: year, mm: mm, dd: dd };
};
