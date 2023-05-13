function CollectData()
{
    var name = document.getElementById("in-name").value;
    var date = document.getElementById("in-date").value;
    var radio = document.getElementsByName("sex");
    var radio_value;
    for (var i = 0; i < radio.length; i++)
    {
        if (radio[i].checked)
        {
            radio_value = radio[i].value;
            break;
        }
    }
    var about = document.getElementById("in-about-me").value;

    window.localStorage.setItem("name", name);
    window.localStorage.setItem("birthday", date);
    window.localStorage.setItem("sex", radio_value);
    window.localStorage.setItem("about", about);
    
    window.open("generated-page.html", "_blank", "location=yes,scrollbars=yes,status=yes,width=1920,height=1080");
}

document.getElementById("button-generate").addEventListener("click", CollectData);