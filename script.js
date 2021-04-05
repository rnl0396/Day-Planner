$(document).ready(function () {

    //creating variable for hour blocks

    var now=parseInt(moment().format('HH'));


    //setting the current day/time at the top of page

    document.getElementById("currentDay").innerText=moment().format('LLLL');


    //setting the time using moment.js for each tab (hour of the work day)

    document.getElementById("nine").innerText=moment("09:00", "LT").format('LT');
    document.getElementById("ten").innerText=moment("10:00", "LT").format('LT');
    document.getElementById("eleven").innerText=moment("11:00", "LT").format('LT');
    document.getElementById("twelve").innerText=moment("12:00", "LT").format('LT');
    document.getElementById("one").innerText=moment("13:00", "LT").format('LT');
    document.getElementById("two").innerText=moment("14:00", "LT").format('LT');
    document.getElementById("three").innerText=moment("15:00", "LT").format('LT');
    document.getElementById("four").innerText=moment("16:00", "LT").format('LT');
    document.getElementById("five").innerText=moment("17:00", "LT").format('LT');

    
    //using if/else statements to determine time of day through different colors; i.e. light green for future, ligh red for past, and gray for current hour.

    if (9>now) {
        document.getElementById("toDo9").style.backgroundColor = "lightseagreen";
    } else if (9<now) {
        document.getElementById("toDo9").style.backgroundColor = "lightcoral";
    } else {
        document.getElementById("toDo9").style.backgroundColor = "gray";
    }

    if (10>now) {
        document.getElementById("toDo10").style.backgroundColor = "lightseagreen";
    } else if (10<now){
        document.getElementById("toDo10").style.backgroundColor = "lightcoral";
    } else {
        document.getElementById("toDo10").style.backgroundColor = "gray";
    }

    if (11>now) {
        document.getElementById("toDo11").style.backgroundColor = "lightseagreen";
    } else if (11<now){
        document.getElementById("toDo11").style.backgroundColor = "lightcoral";
    } else {
        document.getElementById("toDo11").style.backgroundColor = "gray";
    }

    if (12>now) {
        document.getElementById("toDo12").style.backgroundColor = "lightseagreen";
    } else if (12<now){
        document.getElementById("toDo12").style.backgroundColor = "lightcoral";
    } else {
        document.getElementById("toDo12").style.backgroundColor = "gray";
    }

    if (13>now) {
        document.getElementById("toDo1").style.backgroundColor = "lightseagreen";
    } else if (13<now){
        document.getElementById("toDo1").style.backgroundColor = "lightcoral";
    } else {
        document.getElementById("toDo1").style.backgroundColor = "gray";
    }

    if (14>now) {
        document.getElementById("toDo2").style.backgroundColor = "lightseagreen";
    } else if (14<now){
        document.getElementById("toDo2").style.backgroundColor = "lightcoral";
    } else {
        document.getElementById("toDo2").style.backgroundColor = "gray";
    }

    if (15>now) {
        document.getElementById("toDo3").style.backgroundColor = "lightseagreen";
    } else if (15<now){
        document.getElementById("toDo3").style.backgroundColor = "lightcoral";
    } else {
        document.getElementById("toDo3").style.backgroundColor = "gray";
    }

    if (16>now) {
        document.getElementById("toDo4").style.backgroundColor = "lightseagreen";
    } else if (16<now){
        document.getElementById("toDo4").style.backgroundColor = "lightcoral";
    } else {
        document.getElementById("toDo4").style.backgroundColor = "gray";
    }

    if (17>now) {
        document.getElementById("toDo5").style.backgroundColor = "lightseagreen";
    } else if (17<now){
        document.getElementById("toDo5").style.backgroundColor = "lightcoral";
    } else {
        document.getElementById("toDo5").style.backgroundColor = "gray";
    }


    //tying input tag to local storage using JQuery

    $('#toDo9').val(localStorage.toDo9)
    $('#toDo10').val(localStorage.toDo10)
    $('#toDo11').val(localStorage.toDo11)
    $('#toDo12').val(localStorage.toDo12)
    $('#toDo1').val(localStorage.toDo1)
    $('#toDo2').val(localStorage.toDo2)
    $('#toDo3').val(localStorage.toDo3)
    $('#toDo4').val(localStorage.toDo4)
    $('#toDo5').val(localStorage.toDo5)


    //saving the input values

    $('#save9').on('click', function(){
        localStorage.toDo9 = $('#toDo9').val()
    })

    $('#save10').on('click', function(){
        localStorage.toDo10 = $('#toDo10').val()
    })

    $('#save11').on('click', function(){
        localStorage.toDo11 = $('#toDo11').val()
    })

    $('#save12').on('click', function(){
        localStorage.toDo12 = $('#toDo12').val()
    })

    $('#save1').on('click', function(){
        localStorage.toDo1 = $('#toDo1').val()
    })

    $('#save2').on('click', function(){
        localStorage.toDo2 = $('#toDo2').val()
    })

    $('#save3').on('click', function(){
        localStorage.toDo3 = $('#toDo3').val()
    })

    $('#save4').on('click', function(){
        localStorage.toDo4 = $('#toDo4').val()
    })

    $('#save5').on('click', function(){
        localStorage.toDo5 = $('#toDo5').val()
    })

})