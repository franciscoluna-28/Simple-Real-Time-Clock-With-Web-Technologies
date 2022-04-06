function realtimeclock() {
    var clock = new Date;
    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();

    //setting up AM and PM system
    var amAndPm = (hours < 12) ? "AM" : "PM";


    //12 Hours - Format
    hours = (hours < 12) ? hours - 12 : hours;

    //Pad stuff with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2)
    seconds = ("0" + seconds).slice(-2)

    //Clock Displaying
    document.getElementById("clockDesign").innerHTML =
        hours + "  :  " + minutes + "  :  " + seconds + " " + amAndPm;
    var timer = setTimeout(realtimeclock, 500);



}