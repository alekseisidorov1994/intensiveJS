window.addEventListener('DOMContentLoaded', function(){
 `use strict`;
let score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');
    car.classList.add('car');
        start.addEventListener('click',starGame);
        document.addEventListener('keydown',startRun);
        document.addEventListener('keyup',stopRun);
        
    let keys={
        ArrowUp: false,
        ArrowDown: false,
        ArrowRight: false,
        ArrowLeft: false
    };
    let setting={
        start: false,
        score: 0,
        speed:3
    };
    function starGame(){
        start.classList.add('hide');
        setting.start = true;
        gameArea.appendChild(car);
        requestAnimationFrame(playGame);
    }
    function playGame (){
        console.log('play');
        if(setting.start){
            requestAnimationFrame(playGame);
        }
    }
    function startRun(event){
        event.preventDefault();
        keys[event.key] = true;
        console.log(keys);
    }
    function stopRun(event){
        event.preventDefault();
        keys[event.key] = false;
        console.log(keys);
    }
  







});