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
        speed:5,
        traffic:3
    };
    function getQuantityElements(heightElement){
       return Math.floor(gameArea.clientHeight/heightElement);
    }
    function starGame(){
        start.classList.add('hide');
        for(let i=0;i<getQuantityElements(50);i++){
            let line=document.createElement('div');
            line.classList.add('line');
            line.style.top = (i*75)+'px';
            line.y = i*100;
            gameArea.appendChild(line);
        }
        for(let i=0;i<getQuantityElements(100*setting.traffic);i++){
            let enemy = document.createElement('div');
            enemy.classList.add('enemy');
            enemy.style.background = 'url(../image/enemy.png) center center/cover no-repeat';
            enemy.y = -100*setting.traffic*(i+1);
            enemy.style.left = Math.floor((Math.random()*(gameArea.offsetLeft-50)))+'px';
            enemy.style.top = enemy.y+'px';
            gameArea.appendChild(enemy);
        }
        
        gameArea.appendChild(car);
        setting.start = true;
        setting.x = car.offsetLeft;
        setting.y = car.offsetTop;
        console.dir(car);
        requestAnimationFrame(playGame);
    }

    function playGame (){
       
        console.log(setting.y);
        if(setting.start){
            moveRoad();
            moveEnemy();
            if(keys.ArrowLeft && setting.x > 0){
                setting.x-=setting.speed;
            }
            if(keys.ArrowRight && setting.x <(gameArea.offsetWidth-car.clientWidth)){
                setting.x+=setting.speed;
            }
            if(keys.ArrowDown && setting.y <gameArea.offsetHeight-car.clientHeight){
                setting.y+=setting.speed;
            }
            if(keys.ArrowUp && setting.y>0){
                setting.y-=setting.speed;
            } 
            car.style.top = setting.y +'px';
            car.style.left = setting.x + 'px';
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
    function moveRoad(){
        let lines =document.querySelectorAll('.line');
        lines.forEach(function(elem){
            
           if(elem.y > gameArea.offsetHeight){
                elem.y = -100;
            }else{
                elem.y+=setting.speed;
            }
            elem.style.top = elem.y +'px';
           
        });
    }
    function moveEnemy(){
        let enemies = document.querySelectorAll('.enemy');
        enemies.forEach(function(elem){
            if(elem.y > gameArea.offsetHeight){
                elem.y = -100*setting.traffic;
                elem.style.left = Math.floor((Math.random()*(gameArea.offsetLeft-50)))+'px';
            }else{
                elem.y+=setting.speed/2;
            }
            elem.style.top = elem.y +'px';
        });
    }





});