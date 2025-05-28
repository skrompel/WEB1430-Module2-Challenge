/*

Author: Sahara Krompel
Date: 27 May 2025
Purpose: JS Date and Math Objects - Birthday Calculations and Month Countdown
Citations: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp

*/

"use strict";

birthdayCalc();
setInterval("birthdayCalc()", 1000);

function birthdayCalc() {

    // Define a new Date Object to store the current date and time
    var currentDateTime = new Date();

    // Display current date and time in h1 and h2 elements
    var currentDate = currentDateTime.toLocaleDateString();
    var currentTime = currentDateTime.toLocaleTimeString();

    document.getElementById("current-date").textContent = "The current date is: " + currentDate;
    document.getElementById("current-time").textContent = "The current time is: " + currentTime;

    // Change image src and bg/text color property depending on time of day
    var hour = currentDateTime.getHours();
    // var testHour = 10;
    var greetingImg = document.getElementById("greeting-image");

    if (hour < 12) {
        greetingImg.src = "images/morning.jpg";
        document.body.style.color = "black"; // https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
    } else if (hour < 18) {
        greetingImg.src = "images/afternoon.jpg";
        document.body.style.backgroundColor = "#F05A28"; // https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
    } else {
        greetingImg.src = "images/night.jpg";
        document.body.style.backgroundColor = "#001b2c"; // https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
    }

    // Define birthday constant and insert into HTML document content
    const BIRTHDAY = new Date ("November 11, 2005");

    document.getElementById("birthday").textContent = BIRTHDAY.toLocaleDateString();

    // Calculate days (rounded) between birthday and the current date
    var daysOld = (currentDateTime - BIRTHDAY) / (1000 * 60 * 60 * 24); // Converting milliseconds into days

    document.getElementById("days-old").textContent = Math.round(daysOld);

    // Calculate age and check if birthday has already occured this year for accuracy
    var age = currentDateTime.getFullYear() - BIRTHDAY.getFullYear();
    var birthdayThisYear = new Date("November 11," + currentDateTime.getFullYear());

    if (currentDateTime < birthdayThisYear) {
        age --;
    }

    // Calculate current age in dog years
    var dogYears = age * 7;

    document.getElementById("age-dog-years").textContent = Math.round(dogYears);

    // Calculate the number of seconds until the first of the next month (at 12 AM)
    var nextMonth = new Date (currentDateTime.getFullYear(), currentDateTime.getMonth() + 1, 1);
    var secondsRemaining = (nextMonth - currentDateTime) / 1000;

    document.getElementById("seconds-next-month").textContent = Math.round(secondsRemaining);
}