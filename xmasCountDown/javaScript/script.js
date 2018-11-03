"use strict";
//Execute the function to run and display the countdown clock
runClock();
setInterval("runClock()", 1000);
//Function to create and run the countdown clock
function runClock() {
    //Store the current date time 
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    //display the current date and time
    document.getElementById("date").innerHTML = dateStr+ "<br />" + timeStr;

    //Calculate the days until Dec 25
    var xMas = new Date("December 25, 2018");
    
    var daysLeft = (xMas - currentDay)/(1000*60*60*24);

    //Calculate the hours left till x-mas
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    //Calculate the minutes and seconds in the current hour
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    //Display the time left untill X-mas Day
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}



