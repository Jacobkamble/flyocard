export const TodayDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
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
  var mm = mnth[today.getMonth()];

  const weekday = [7];
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var dd = weekday[today.getDay()];

  return { day: day, month: month, year: year, mm: mm, dd: dd };
};
