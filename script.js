let canvas = document.querySelector('canvas')
canvas.style.backgroundColor = '#34851c'
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black';

let title = document.querySelector('#startScreen')

let startScreen = new Image();
startScreen.src = './images/BikerStartScreen.jpg'

let endScreen = new Image();
endScreen.src = './images/endgamescreen.jpg'

let road = new Image();
road.src = './images/road.png'

let car = new Image();
car.src = './images/car.png'
let carHeight = 145, carWidth = 120
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
let decCar = 2


let cars = [
    {x: carX, y: carY},
    {x: carX + 280, y: carY - 400},
    {x: carX + 550, y: carY - 800}
]

function draw(){

    
// ctx.drawImage(startScreen, 0, 0)
// canvas.style.display = 'block'              //ask josh bout start image

startBtn.style.display = 'none';
restartBtn.style.display = 'none'; 
canvas.style.display = 'block'
title.style.display = 'none'

    ctx.drawImage(road, 0, 0)
    canvas.style.display = 'block'

    ctx.drawImage(biker, bikerX, bikerY, bikerWidth, bikerHeight) // check with Josh ,630, canvas.height - 120, 90,120
// hide the start button during the game and show restart button after a collision
// if gameover is true make a if else condition 


for(let i=0; i<cars.length; i++){
ctx.drawImage(car, cars[i].x, cars[i].y, carWidth, carHeight)
cars[i].y = cars[i].y + decCar

if(cars[i].y - car.height > canvas.height ) {
    cars[i].y = -250


}
if(cars[i].y == canvas.height) {
    score++
    console.log(score)
}
//collision logic

    if(bikerX + bikerWidth >= cars[i].x && bikerX <= cars[i].x + (carWidth) && (bikerY <= cars[i].y + carHeight && bikerY+bikerHeight >= cars[i].y)){
        
        console.log(cars)

     gameOver = true;
  }

if(bikerX < 200 || bikerX > 880){
    gameOver = true;
}

    ctx.font = '40px Verdana'
    ctx.fillText(`Score: ${score}`, 30, canvas.height - 70 )

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

    ctx.drawImage(startScreen, 0, 0)
    title.style.display = 'block' 

    ctx.drawImage(startScreen, 0, 0)
    canvas.style.display = 'block'

    canvas.style.display = 'none'
    restartBtn.style.display = 'none'
    startBtn.style.display = 'block'

}

function endGame(){

    gameOver = false;                        // ask josh top 3 lines
    canvas.style.display = 'none'
    restartBtn.style.display = 'block'
    startBtn.style.display = 'none'

    bikerX = 630, bikerY = canvas.height - bikerHeight - 15

    cars = [
        {x: carX, y: carY},
        {x: carX + 280, y: carY - 400},  // runs the same without the array & if crashes in the middle cant restart
        {x: carX + 550, y: carY - 800}
    ]
  //score = 0;
   

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