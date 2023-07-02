// console.log(time);
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
let time = `${hour} : ${minute} : ${second} `
let week = date.getDay()
month++
week
let monthName = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
]
let weekday = [
    'Monday', 
    'Tuesday',
    'Thursday',
    'Wednesday',
    'Friday',
    'Saturday',
    "Sunday"
]

// console.log(textTime);
document.querySelectorAll('.me')[0].innerHTML = `${hour>12?hour-12:hour} :  ${minute} ${hour<12?'AM':'PM'}`
document.querySelectorAll('.me')[1].innerHTML = `${hour>12?hour-12:hour} :  ${minute} : ${setInterval(() => {return second++}, 1000)} ${hour<12?'AM':'PM'}`
document.querySelectorAll('.me')[2].innerHTML = `${month<10?'0'+month:month} /  ${day<10?'0'+day:day} / ${year}`
document.querySelectorAll('.me')[3].innerHTML = `${month++} /  ${day} / ${year}`
document.querySelectorAll('.me')[4].innerHTML = `${monthName[month-2]} ${day}, ${year}`
document.querySelectorAll('.me')[5].innerHTML = `${monthName[month-2].slice(0,3)} ${day}, ${year}`
document.querySelectorAll('.me')[6].innerHTML = `${monthName[month-2]} ${day}, ${year} ${hour>12?hour-12:hour} :  ${minute} ${hour<12?'AM':'PM'}`
document.querySelectorAll('.me')[7].innerHTML = `${monthName[month-2].slice(0,3)} ${day}, ${year} ${hour>12?hour-12:hour} :  ${minute} ${hour<12?'AM':'PM'}`
document.querySelectorAll('.me')[8].innerHTML = `${weekday[week+6]},    ${monthName[month-2]} ${day}, ${year} ${hour>12?hour-12:hour} :  ${minute} ${hour<12?'AM':'PM'}`
document.querySelectorAll('.me')[9].innerHTML = `${weekday[week+6].slice(0,3)}, ${monthName[month-2]} ${day}, ${year} ${hour>12?hour-12:hour} :  ${minute} ${hour<12?'AM':'PM'}`
// document.querySelectorAll('.me')[0].innerHTML = `${hour>12?hour-12:hour} :  ${minute} ${hour<12?'AM':'PM'}`
// document.querySelectorAll('.me')[0].innerHTML = `${hour>12?hour-12:hour} :  ${minute} ${hour<12?'AM':'PM'}`
