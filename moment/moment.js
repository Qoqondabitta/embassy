// console.log(time);
let date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()
let time = `${hour} : ${minute} : ${second} `
const textTime = document.querySelector('#me')
console.log(textTime);