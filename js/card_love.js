var htmer_time = document.getElementById("htmer_time");
var htmer_time_time = null;

function isLeapYear(year) {
    // 如果年份是400的倍数，那么是闰年
    // 如果年份是4的倍数但不是100的倍数，也是闰年
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function setTime() {
    var create_time = Math.round(
        // 这里是你们在一起的时间，注意月份要减一,天数也减一处理
        new Date(Date.UTC(2017, 7, 21, 17, 0, 0)).getTime() / 1000
    );
    var timestamp = Math.round(
        (new Date().getTime() + 8 * 60 * 60 * 1000) / 1000
    );
    currentTime = secondToDate(timestamp - create_time);
    var day = currentTime[0] * (isLeapYear(currentTime[0]) ? 366 : 365) + currentTime[1];
    currentDay = secondToDay(timestamp - create_time);
    currentTimeHtml =
        currentTime[0] +
        ' 年 ' +
        currentTime[1] +
        ' 日 ' +
        currentTime[2] +
        ' 时 ' +
        currentTime[3] +
        ' 分 ' +
        currentTime[4] +
        ' 秒 ' +
        day +
        ' 天 ';
    htmer_time.innerHTML = currentTimeHtml;
}

function secondToDate(second) {
    if (!second) {
        return 0;
    }
    var time = new Array(0, 0, 0, 0, 0);
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = parseInt(second / 3600);
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = parseInt(second / 60);
        second %= 60;
    }
    if (second > 0) {
        time[4] = second;
    }
    return time;
}

function secondToDay(second) {
    if (!second) {
        return 0;
    }
    var day = 0;
    day = parseInt(second / (24 * 3600));
    return day;
}

function cheesy_pick_up_lines() {
    let html = "";
    for (let i = 0; i < 1; i++) {
      fetch("一往而深❤")
        .then((data) => data.text())
        .then((data) => {
          html += "<li>" + data + "</li>";
          document.querySelector("#cheesy_pick-up_lines-container").innerHTML =
            html;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

if (htmer_time) {
    htmer_time_time = setInterval(setTime, 1000);
} else {
    clearInterval(htmer_time_time);
}