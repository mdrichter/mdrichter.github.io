function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.now();
  const miliseconds = total%1000;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = 1+Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    miliseconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const milisecondsSpan = clock.querySelector('.miliseconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    milisecondsSpan.innerHTML=('00'+t.miliseconds).slice(-3);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }


  updateClock();
  const timeinterval = setInterval(updateClock, 9);
}

const deadline = new Date(Date.parse("10/15/2022 21:15:24")-24*60*60*1000);
initializeClock('clockdiv', deadline);