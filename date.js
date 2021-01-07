let today = new Date(); 

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜

if (month < 10) {
    month = "0" + month
}
if (date < 10) {
    date = "0" + date
}

push = year + '. ' + month + '. ' + date;


