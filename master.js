let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat6 ');
let moonmax = document.querySelector('.moonmax'); 

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2+ 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    moonmax.style.fontSize = value * 3 + 'px';
    if(scrollY >= 59){
        moonmax.style.fontSize = 59 + 'px';
        moonmax.style.position = 'fixed' ;
        if(scrollY >=501){
            moonmax.style.display = 'none' ;

        }
        else{
            moonmax.style.display = 'block'
        }
        if(scrollY >=151){
            document.querySelector('.main').style.background = 'linear-gradient(#200016, rgb(72, 155, 188) 67.65%, #10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)' 
        }
    }
}