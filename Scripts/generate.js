var heading = document.querySelector("h1");
var bday = document.getElementById("p-date");
var sex = document.getElementById("p-sex");
var about = document.getElementById("p-about-me");

if (window.localStorage.getItem('name') == null || 
window.localStorage.getItem('birthday') == null ||
window.localStorage.getItem('sex') == null ||
window.localStorage.getItem('about') == null)
{
    heading.textContent = "Данные не обнаружены";
    bday.textContent = heading.textContent;
    sex.textContent = heading.textContent;
    about.textContent = heading.textContent;
}
else
{
    heading.textContent = window.localStorage.getItem('name');
    bday.textContent = "Дата рождения: " + window.localStorage.getItem('birthday');
    
    if (window.localStorage.getItem('sex') == "male")
    {
        sex.textContent = "Пол: " + "мужской";
    }
    else
    {
        sex.textContent = "Пол: " + "женский";
    }
    
    about.textContent = "Обо мне: " + window.localStorage.getItem('about');
}