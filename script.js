let canvas = document.querySelector('canvas')
// canvas.style.backgroundColor = '#34851c'     // ask josh if canvas color is having effect 
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black';

let title = document.querySelector('#startScreen')
                                                            // look here for both start screen options
let startScreen = new Image();
startScreen.src = './images/BikerStartScreen.jpg'

let gameOverScreen = document.querySelector('#endScreen')

let endScreen = new Image();
endScreen.src = './images/endgamescreen.jpg'

let road = new Image();
road.src = './images/road.png'

let bus = new Image();
bus.src = './images/bus.png'

let car2 = new Image();
car2.src = './images/car2.png'

let car = new Image();
car.src = './images/car.png'
let carHeight = 165, carWidth = 165
let carX = 250
let carY = 30

let biker = new Image(); 
biker.src = './images/biker.png'
let bikerHeight = 120, bikerWidth = 90
let bikerX = 630, bikerY = canvas.height - bikerHeight - 15

let isRight = false, isLeft = false; 
 
let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let intervalId = 0;
let gameOver = false; 
let score = 0;
let driving = true;
let decCar = 4


let cars = [
    {x: carX, y: carY},
    {x: carX + 280, y: carY - 400},
    {x: carX + 315, y: carY - 1200},
    {x: carX + 550, y: carY - 2020},
    {x: carX + 400, y: carY - 2800},
]

let cars2 =[

    {x: carX + 550, y: carY - 900},
    {x: carX + 70, y: carY - 1600},
    {x: carX + 280, y: carY - 2400},
    {x: carX + 80, y: carY - 3000}
]

let bus1 = [

    {x: carX + 30, y: carY - 2400}
]

function draw(){


startBtn.style.display = 'none';
restartBtn.style.display = 'none'; 
// canvas.style.display = 'block'
title.style.display = 'none'
gameOverScreen.style.display = 'none'

    ctx.drawImage(road, 0, 0)
    canvas.style.display = 'block'

    ctx.drawImage(biker, bikerX, bikerY, bikerWidth, bikerHeight) // check with Josh ,630, canvas.height - 120, 90,120
// hide the start button during the game and show restart button after a collision
// if gameover is true make a if else condition 

// red car array aka car
for(let i=0; i<cars.length; i++){
ctx.drawImage(car, cars[i].x, cars[i].y, carWidth, carHeight)
cars[i].y = cars[i].y + decCar

if(cars[i].y - car.height > canvas.height ) {
    cars[i].y = -2500


}
if(cars[i].y == canvas.height) {
    score++

}
//collision logic

    if(bikerX + bikerWidth >= cars[i].x && bikerX <= cars[i].x + (carWidth) && (bikerY <= cars[i].y + carHeight && bikerY+bikerHeight >= cars[i].y)){

     gameOver = true;
  }

if(bikerX < 200 || bikerX > 880){
    gameOver = true;
}

    ctx.font = '40px Verdana'
    ctx.fillText(`Score: ${score}`, 30, canvas.height - 70 )

}

// car2 array aka yellow car

for(let i=0; i<cars2.length; i++){
    ctx.drawImage(car2, cars2[i].x, cars2[i].y, carWidth, carHeight)
    cars2[i].y = cars2[i].y + decCar
    
    if(cars2[i].y - car.height > canvas.height ) {
        cars2[i].y = -2500
    
    
    }
    if(cars2[i].y == canvas.height) {
        score++
    
    
        console.log(score)
    }
    //collision logic
    
        if(bikerX + bikerWidth >= cars2[i].x && bikerX <= cars2[i].x + (carWidth) && (bikerY <= cars2[i].y + carHeight && bikerY+bikerHeight >= cars2[i].y)){
            
            
    
         gameOver = true;
      }
    
    if(bikerX < 200 || bikerX > 880){
        gameOver = true;
    }
    
    }
// bus logic
    for(let i=0; i<bus1.length; i++){
        ctx.drawImage(bus, bus1[i].x, bus1[i].y, carWidth, carHeight + 250)
        bus1[i].y = bus1[i].y + decCar
        
        if(bus1[i].y - car.height + 250 > canvas.height ) {
            bus1[i].y = -2500
        
        
        }
        if(bus1[i].y == canvas.height) {
            score++
        
            console.log(score)
        }
        //collision logic
        
            if(bikerX + bikerWidth >= bus1[i].x && bikerX <= bus1[i].x + (carWidth) && (bikerY <= bus1[i].y + carHeight && bikerY+bikerHeight >= bus1[i].y)){
                
                console.log(cars)
        
             gameOver = true;
          }
        
        if(bikerX < 200 || bikerX > 880){
            gameOver = true;
        }
        
           
        
        }




movement()

if (gameOver) {
    cancelAnimationFrame(intervalId);
endGame()
score = 0;
  } else {
    intervalId = requestAnimationFrame(draw);
  }

if(driving) {
    carY = carY + 1
}

}

function splash(){


    

    // ctx.drawImage(startScreen, 0, 0)
     title.style.display = 'block' 

    // ctx.drawImage(startScreen, 0, 0)
    // canvas.style.display = 'block'
    gameOverScreen.style.display = 'none'
    canvas.style.display = 'none'
    restartBtn.style.display = 'none'
    startBtn.style.display = 'block'

}

function endGame(){

    gameOver = false;   
    canvas.style.display = 'none'
    restartBtn.style.display = 'block'
    startBtn.style.display = 'none'
    gameOverScreen.style.display = 'block'

    bikerX = 630, bikerY = canvas.height - bikerHeight - 15

    cars = [
        {x: 250, y: 30},
        {x: 250 + 280, y: 30 - 400},
        {x: 250 + 315, y: 30 - 1200},
        {x: 250 + 550, y: 30 - 2020},
        {x: 250 + 400, y: 30 - 2800},
    ]
    
    cars2 =[
    
        {x: 250 + 550, y: 30 - 900},
        {x: 250 + 70, y: 30 - 1600},
        {x: 250 + 280, y: 30 - 2400},
        {x: 250 + 80, y: 30 - 3000}
    ]
    
    bus1 = [
    
        {x: 250 + 30, y: 30 - 2400}
    ]
   

}

function movement(){

    if (isLeft){
        bikerX = bikerX - 5
    }
    if (isRight){
        bikerX = bikerX + 5
    }
    }


window.addEventListener('load', () => {
    
    splash()
    startBtn.addEventListener('click', () => {
      
        draw()
    })

    restartBtn.addEventListener('click', () => {
        console.log('restartBtn')
        draw()
       
    })

document.addEventListener('keydown', (event) => {
    if(event.key == 'ArrowLeft') {
        isLeft = true;
        isRight = false;
        console.log(event.key)
    }
    if(event.key == 'ArrowRight') {
        isRight = true;
        isLeft = false;
        console.log(event.key)
    }
})

document.addEventListener('keyup', (event) => {
    if(event.key == 'ArrowLeft') {
        isLeft = false;
        
    }
    if(event.key == 'ArrowRight') {
        isRight = false;
       
    }
   
})
    
})