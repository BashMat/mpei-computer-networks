window.addEventListener("load", (event) => {
    console.log("Onload event triggered");
    window.alert("Запуск стартовой страницы...")
  });

function ClockAndDate()
{
    var date = new Date();
    var day = date.getDate();
    var dayOfWeek = date.toLocaleDateString("ru-RU", {weekday: "short"});
    console.log(day + dayOfWeek);
    var hours = date.getHours();
    var minutes = date.getMinutes();

    if (hours < 10)
    {
        hours = "0" + hours;
    }
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (day < 10)
    {
        day = "0" + day;
    }

    const clock = document.getElementById("digital-clock");
    if (clock.textContent != hours + ":" + minutes)
    { 
        clock.textContent = hours + ":" + minutes;
    }
    const curDate = document.getElementById("current-date");
    if (curDate.textContent != day + " " + dayOfWeek)
    {
        curDate.textContent = day + " " + dayOfWeek;
    }
    
    console.log("Clock was updated" + window.outerWidth);
    
    setTimeout(ClockAndDate, 1000);
}

var adLeft = 0;
var move = 1;

function ShowAd()
{
    var div = document.getElementById("ad");
    div.style.left = "";
    if (adLeft >= 45)
    {
        move = -1;
    }
    else if (adLeft <= 5)
    {
        move = 1;
    }
    adLeft += move;
    div.style.left = adLeft + "%";
    console.log(div.style.left);
    setTimeout(ShowAd, 1000);
}

console.log("Launching ClockAndDate...");
ClockAndDate();
ShowAd();