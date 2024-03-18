"use strict";
// stages of life write an if else chain that determises a persons stage of life 
// set a value for the variable age, and then 
let age = 3;
// if then person is the less than two years old print a message that the person is a baby 
// if than person is the least 3 years old but less then 5 print a message that the person is a toolder
// if than person is the least 5 years old but less than 14 print a message that the person is kid 
// if than person is the leads 14 years old but less than  18 print a message that the person is teenger
//  if than person is the least 18 years old but less than 55 print a message that the person is an adult
// if the person is age 55 or older print a message that the person is an elder
if (age < 3) {
    console.log(`person is a baby `);
}
else if (age >= 3 && age < 5) {
    console.log('a person is toddler');
}
else if (age > 5 && age < 14) {
    console.log(` a person is a kind`);
}
else if (age > 14 && age < 18) {
    console.log(` a person is teenager`);
}
else if (age > 18 && age < 55) {
    console.log(` a person is an adult`);
}
else {
    console.log('a person is elder ');
}
