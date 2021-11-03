# Project's name
[Link Deploy](http://github.com)

Door Dash Derby!

## Description
Door Dash Derby (DDD) is a new exciting game where players have to move their character (the delivery man) left or right to avoid oncoming obstacles. There are three lanes for the player to manuever in to evade said obstacles. Score is calculated by time without collision. For every 10 seconds passed the speed of which the obstacles come at you will increase! Be careful, one collision and the game is over! 


## MVP
- Game has one character at the bottom of the screen that moves on the X axis
- Obstacles (cars and pedestrians) will fall from the top of the Y axis
- Obstacles will fall at random
- A collision with the character and any obstacle will end the game
- A running clock
- Increasing difficulty as time increases


## Backlog
- Add a highscore 

## Data structure
main.js
- buildSplashScreen(){}
- buildGameScreen(){}
- buildGameOverScreen(){}

game.js
-game(){}
-startLoop(){}
-checkCollisions(){}
-addObstacle(){}
-clearCanvas(){}
-updateCanvas(){}
-drawCanvas(){}
-GameOver(){} // askwhy this isnt in camel case

deliveryDude.js
-deliveryDude.js (){this.x; this.y; this.direction; this.size}
-draw(){}
-move(){}
-checkCollisionTop(){}

obstacles.js
-pedestrian(){this.x; this.y; this.direction; this.size}
-vehicle(){this.x; this.y; this.direction; this.size}
-checkCollisionBottom(){}

States

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen // not applicable here


## Task
Task definition in order of priority
main -buildDom
main -buildSplashScreen
main -addEventListener
main -buildGameScreen
main -buildGameOverScreen
game -startLoop
game - buildCanvas
game -updateCanvas
game -drawCanvas
obstacle - draw
obstacle - move
game - addObstacle
deliveryDude- draw
deliveryDude- move
game -check collision
game- GameOver
game- addEventListener

## Additional Links


### Trello
[Link url](https://trello.com)


### Slides
[Link Slides.com](http://slides.com)
