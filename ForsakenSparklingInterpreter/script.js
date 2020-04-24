const clockContainer = document.querySelector('.clock'),
      clockTitle = clockContainer.querySelector("h1"),
      messageBelowClock = document.getElementById('messageBelowClock');

function getTime(){
    const date = new Date();
    const minutes =date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours< 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;

}
function amPM(){
    const date = new Date();
    const hours = date.getHours();
    if (hours<12 && hours>6){
        messageBelowClock.innerText = `Good morning! You are the best. Believe yourself.`

    }
    else if (hours<18 && hours>=12){
        messageBelowClock.innerText = `Good afternoon! You are the best. Believe yourself.`

    }
    else if (hours>=18 || hours< 6){
        messageBelowClock.innerText = `Good evening! You are the best. Believe yourself.`

    }
}


amPM();
getTime();
setInterval(getTime, 1000);
  var next2 = function(){

  $('.button').fadeIn(1000)

  }

  var next1 = function(){
    $('#messageBelowClock').hide();
    $('#messageBelowClock').fadeIn(500,next2);
  }
$(document).ready(function(){
    $('.button').hide();
    $('.clock').hide();
    $('#messageBelowClock').hide();
    $('.clock').fadeIn(1000, next1);
        

  });
var bgimage = document.querySelector('body');
$(document).ready(function(){
    $(bgimage).css('display','none')
    $(bgimage).fadeIn(1000);

})




