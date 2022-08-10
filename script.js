
/*Declaration of variables*/
let Hours = 0;
let Minutes = 0;
let Seconds = 0;
let Miliseconds = 0;
let cronometro;

/*Auxiliary Functions*/
function SettingOne(date){
    return date > 10 ? date : `0${date}`; 
}
function SettingTwo(date){
    let returnDate = SettingOne(date);
    return returnDate > 100 ? returnDate : `0${returnDate}`;
}
function counter(){
    if(Miliseconds == 1000){
        Seconds += 1;
        Miliseconds = 0;
    }
    if(Seconds == 60){
        Minutes += 1;
        Seconds = 0;
    }
    if(Minutes == 60){
        Hours += 1;
        Minutes = 0;
    }
    document.getElementById('Display').innerText = `${SettingOne(Hours)} : ${SettingOne(Minutes)} : ${SettingOne(Seconds)}. `;
    document.getElementById('Displaytwo').innerText = `${SettingTwo(Miliseconds)}`;
    Miliseconds+= 1;
}

/*Main Functions - Described by your Name*/
function start(){
    pause();
    cronometro =  setInterval(()=>{counter();}, 10);
}
function pause(){
    clearInterval(cronometro);
}
function reset(){
    Hours = 0;
    Minutes = 0;
    Seconds = 0;
    Miliseconds = 0;
    document.getElementById('Display').innerText = `00 : 00 : 00. `;
    document.getElementById('Displaytwo').innerText = `000`;
}