const timeToJob = (dayStart, dayEnd, meetingStart, meetingTimeMin) => {
  const toMinutes = [dayStart.split(':'),dayEnd.split(':'),meetingStart.split(':')];
  const minutesVal = [];
  for (let i = 0; i < toMinutes.length; i++) {
    let minutes = Number((toMinutes[i])[0]) * 60;
    minutes = minutes + Number((toMinutes[i])[1]);
    minutesVal.push(minutes);
  }
  const dayStartInMinutes = minutesVal[0];
  const dayEndInMinutes = minutesVal[1];
  const meetingStartInMinutes = minutesVal[2];

  const meetTime = minutesVal[2] + meetingTimeMin;

  if (meetTime > dayEndInMinutes || meetingStartInMinutes < dayStartInMinutes) {
    return false;
  }
  return true;
};
/* eslint-disable */
console.log(timeToJob('08:00', '17:30', '14:00', 90));
console.log(timeToJob('8:0', '10:0', '8:0', 120));
console.log(timeToJob('08:00', '14:30', '14:00', 90));
console.log(timeToJob('14:00', '17:30', '08:0', 90));
console.log(timeToJob('8:00', '17:30', '08:00', 900));
 /* eslint-enable */
