"use strict";
// alien colors #3 : turn your if | else chain from exercise 4 & 5 into an if else chain..
let aliencolers = 'yellow';
//  if the alien is blue print a message that the player earned 5 points 
//  if the alien is the green print a message that the player earned 10 points
//  if the alien is the red print a message that the player earned 15 points 
// version 1
if (aliencolers === `blue`) {
    console.log('player earned 5 points');
}
else if (aliencolers === 'green') {
    console.log(`player earned 10 points`);
}
else if (aliencolers === 'red') {
    console.log(`player earned 15 points`);
}
else {
    console.log(`please select the coler`);
}
// version 2 
aliencolers = 'blue';
if (aliencolers === `blue`) {
    console.log('player earned 5 points');
}
else if (aliencolers === 'yellow') {
    console.log(`player earned 10 points`);
}
else if (aliencolers === 'red') {
    console.log(`player earned 15 points`);
}
else {
    console.log(`please select the coler`);
}
// version 3 
aliencolers = 'red';
if (aliencolers === `blue`) {
    console.log('player earned 5 points');
}
else if (aliencolers === 'green') {
    console.log(`player earned 10 points`);
}
else if (aliencolers === 'red') {
    console.log(`player earned 15 points`);
}
else {
    console.log(`please select the coler`);
}
