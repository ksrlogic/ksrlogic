var bfbtn = document.querySelector('.button1')





function imagechange(){
    var x = Math.random()*5
    var num = Math.floor(x)
    var K = `url(img/${num+1}.jpg)`;
    $('.wholeDocument').css('background-image', K);
    
}

bfbtn.addEventListener('click',imagechange)

