var testIsActive = false;

function LaunchTest()
{
    console.log("Launching test...");
    document.getElementById("results").style.display = "none"
    document.getElementById("test").style.display = "block";
    document.getElementById("timer").style.display = "block"
    var allRadio = document.querySelectorAll("input[type='radio']");
    for (i = 0; i < allRadio.length; i++)
    {
        allRadio.item(i).checked = false
    }
    testIsActive = true;
    Timer(1, 0);
}

function Timer(minutes, seconds)
{
    console.log("Current time: " + minutes + ":" + seconds);
    if (minutes == 0 && seconds == 0)
    {
        return StopTest()
    }

    var mins, secs;

    if (minutes < 10)
    {
        mins = "0" + minutes;
    }
    else
    {
        mins = minutes.toString()
    }
    if (seconds < 10)
    {
        secs = "0" + seconds;
    }
    else
    {
        secs = seconds.toString()
    }

    if (testIsActive)
    {
        document.getElementById("timer").textContent = mins + ":" + secs;
    }

    if (seconds == 0)
    {
        seconds = 60;
        minutes -= 1;
    }
    else
    {
        seconds -= 1;
    }

    if (testIsActive)
    {
        setTimeout(Timer, 1000, minutes, seconds)
    }
}

function CalculateTestResult()
{
    var allQuestions = document.querySelectorAll(".question")
    var correct = 0

    var correctAnswers = ["Огненный снаряд", "Империя Атрил", "Тэзрин Ильтамар II", "Три"]
    for (i = 0; i < allQuestions.length; i++)
    {
        if (allQuestions.item(i).querySelector(`input[value='${correctAnswers[i]}'`).checked)
        {
            correct += 1
        } 
    }

    return correct/allQuestions.length * 100;
}

function StopTest()
{
    console.log("Stopping test");
    testIsActive = false;
    var timer = document.getElementById("timer");
    timer.textContent = "00:00"
    timer.style.display = "none"
    document.getElementById("test").style.display = "none";
    var result = CalculateTestResult()
    document.getElementById("results").style.display = "block";
    document.getElementById("correct").textContent = "Правильных ответов: " + result + "%";
}

console.log("Launching script...");
document.getElementById("button-launch-test").addEventListener("click", LaunchTest);
document.getElementById("button-stop-test").addEventListener("click", StopTest);