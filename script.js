const MIN = document.querySelector(".min");
const SEC = document.querySelector(".sec");
const MS = document.querySelector(".ms");
const START = document.querySelector(".start");
const STOP = document.querySelector(".stop");
const RESET = document.querySelector(".reset");
const CLKBORDER = document.querySelector(".clock");

var clkStart = false;

var min = parseInt(MIN.innerHTML);
var sec = parseInt(SEC.innerHTML);
var ms = parseInt(MS.innerHTML);

var Interval = null;

function clock(){
    
    ms++;
    if(ms==99)
    {
        sec++;
        ms=0;
    }
    if(sec==59){
        min++;
        sec=0;
        ms=0;
    }
    if(min==59)
    {
        min=0;
        sec=0;
        ms=0;
    }

    if(min<10)
        MIN.innerHTML = "0" + min;
    else
        MIN.innerHTML = min;

    if(sec<10)
        SEC.innerHTML = "0" + sec;
    else
        SEC.innerHTML = sec;

    if(ms<10)
        MS.innerHTML = "0" + ms;
    else
        MS.innerHTML = ms;
}

function checkStart(){
    if(clkStart==true){
        CLKBORDER.style.boxShadow = "0 0 25px darkblue";
    }
    else{
        CLKBORDER.style.boxShadow = "none";
    }
}

function start(){
    if(clkStart==false)
    {
        Interval = setInterval(clock,10);
        clkStart = true;
    }
}

function stop(){
    clearInterval(Interval);
    Interval = null;
    clkStart = false;
}

function reset(){
    stop();

    min=0;
    sec=0
    
    MIN.innerHTML = "00";
    SEC.innerHTML = "00";
    MS.innerHTML = "00";
}

START.addEventListener("click",start,false);
STOP.addEventListener("click",stop,false);
RESET.addEventListener("click",reset,false);

START.addEventListener("click",checkStart,false);
STOP.addEventListener("click",checkStart,false);
RESET.addEventListener("click",checkStart,false);

