// count down 로직
// 종료 시간 설정
// 현재시간에서 종료시간 계산하여 렌더링
// new Date() 시간은 milli second 로 표시

const displayFutuerTime = document.querySelector('.giveaway');
const displayLeftDate = document.querySelectorAll('.deadline-format h4');

// milliseconds 에서 표시하기 위해서 배열 미리 나타냄
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

let currTime = new Date();

let currYear = currTime.getFullYear();
let currMonth = currTime.getMonth();
let currDate = currTime.getDate();

let futuerTime = new Date(currYear, currMonth, currDate + 10, 11, 59, 0);

let futureYear = futuerTime.getFullYear();
let futureMonth = futuerTime.getMonth();
let futureDate = futuerTime.getDate();
let futureHours = futuerTime.getHours();
let furuterMins = futuerTime.getMinutes();
let futuerDay = futuerTime.getDay();

let millToDay = 1000 * 60 * 60 * 24;
let millToHours = 1000 * 60 * 60;
let millToMinutes = 1000 * 60;

displayFutuerTime.textContent = `이벤트 종료 기간 , ${futureYear}년 ${months[futureMonth]}월 ${futureDate}일 ${weekdays[futuerDay]}요일, ${futureHours}: ${furuterMins}pm`;

function countDate() {
    const today = new Date().getTime();
    let leftTotalTimes = futuerTime - today;
    let leftDays = Math.floor(leftTotalTimes / millToDay);
    let leftHours = Math.floor((leftTotalTimes % millToDay) / millToHours);
    let leftMins = Math.floor((leftTotalTimes % millToHours) / millToMinutes);
    let leftSecs = Math.floor((leftTotalTimes % millToMinutes) / 1000);
    let values = [leftDays, leftHours, leftMins, leftSecs];

    displayLeftDate.forEach((el, idx) => {
        if (values[idx] < 10) {
            el.textContent = ` 0${values[idx]}`;
        } else {
            el.textContent = values[idx];
        }
    });

    if (leftTotalTimes < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">해당 이벤트가 종료되었습니다</h4>`;
    }
}

let countDown = setInterval(countDate, 1000);

countDate();

// const today = new Date().getTime();

// const t = futureTime - today;
// // 1s = 1000ms
// // 1m = 60s
// // 1hr = 60m
// // 1d = 24hr
// // values in miliseconds
// const oneDay = 24 * 60 * 60 * 1000;
// const oneHour = 60 * 60 * 1000;
// const oneMinute = 60 * 1000;
// // calculate all values
// let days = t / oneDay;
// days = Math.floor(days);
// let hours = Math.floor((t % oneDay) / oneHour);
// let minutes = Math.floor((t % oneHour) / oneMinute);
// let seconds = Math.floor((t % oneMinute) / 1000);
