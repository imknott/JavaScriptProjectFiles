//lines 1-26 contain the global variables neccessary for our program to funciton. 

let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

let numClosedDoors = 3;

let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById('start');

let currentlyPlaying = true; 

// these are the doors that we will use to apply a random number that will decide which door will hold the robot. 
let openDoor1; 
let openDoor2;
let openDoor3; 

//this function tests to see if the door open is the botDoorPath or not. 
const isBot = (door) => {

if (door.src === botDoorPath){
  return true;
}else{
  return false;
}

}

//this function will check if the door has already been clicked if it has it returns true if the door has not been opened it will return false. 
const isClicked = (door) => {
if(door.src === closedDoorPath){
return false;
}else{ 
  return true;
}

}

// this function takes in the parameter door and decreases the total number of closed doors by 1 each time it is called. then proceeds to check if the you either clicked a door that reveals the robot or you reach the end and win. 
const playDoor = (door) => {

numClosedDoors--;

if(numClosedDoors === 0 ){
gameOver('win');
}else if(isBot(door)){
gameOver();
}
}


//the randomChoreDoorGenerator randomly generates a number between 0 and 2 to define which door will hold the robot picture. 
const randomChoreDoorGenerator = () => {

const choreDoor = Math.floor(Math.random() * numClosedDoors);

if(choreDoor === 0){
openDoor1 = botDoorPath;
openDoor2 = spaceDoorPath;
openDoor3 = beachDoorPath;
}
else if(choreDoor === 1){
openDoor2 = botDoorPath;
openDoor1 = spaceDoorPath;
openDoor3 = beachDoorPath;
}
else if (choreDoor === 2){
openDoor3 = botDoorPath;
openDoor2 = spaceDoorPath;
openDoor1 = beachDoorPath;
}
else{ 
  console.log('The bounds are off.')
};

}


//this onclick method uses an arrow function to set the image of door1 to the robot.
doorImage1.onclick = () => {


if(currentlyPlaying && !isClicked(doorImage1)){
doorImage1.src = openDoor1;
playDoor(doorImage1);
}


}

//this onclick method uses an arrow function to set the image of door2 to the robot.
doorImage2.onclick = () => {


if(currentlyPlaying && !isClicked(doorImage2)){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
}
}

//this onclick method uses an arrow function to set the image of door3 to the robot.
doorImage3.onclick = () => {


if(currentlyPlaying && !isClicked(doorImage3)){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
}
}

//this function is called when the startbutton is pressed and will reset the game so you can try again without rerunning the code. 
startButton.onclick = () => {
startRound();

}

//this function is used to reset the values neccessary to make the game replayable. 
const startRound = () => {
doorImage1.src = closedDoorPath;
doorImage2.src = closedDoorPath;
doorImage3.src = closedDoorPath;

numClosedDoors = 3;

currentlyPlaying = true; 

startButton.innerHTML = 'Good luck!';
randomChoreDoorGenerator();

}

//this will be the function that tests to see if you meet the winning game over condition or the losing game over condition. 
const gameOver = (status) => {

if (status === 'win'){
startButton.innerHTML = 'You win! Play again?';
} else {
  startButton.innerHTML = 'Game Over! Play again?';
}
currentlyPlaying = false; 
}

startRound();
