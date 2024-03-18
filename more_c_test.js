"use strict";
// equalityy and inequality test 1
console.log('equality test with strings: " , "cat ==="cat"');
// equalityy and inequality test 2
console.log('equality test with strings: ", (cat as string) != orange ');
// tests using the lower case  funcation 
console.log('lower case funcation test: " , "hello".tolowercase() ==="hello"');
// numrical tests involving equilty and inequilty 
console.log('equality test with numbers:', 26 === 26);
// greater than and less then 
console.log("grater than test", 10 > 5);
//  grater than or equal to
console.log('greater than and eqaul to test:', 10 >= 10);
// less then or equal to 
console.log('less then or equal to test:', 5 <= 12);
// tests using and or operator
console.log('and operator test:', 5 === 5 && 10 > 5);
// tests using "or" operator
console.log('or operater test:', 6 === 6 || false);
// test whether an atom is in a arrayy 
const fruits = ['banana', 'APPLE', 'ORANGE'];
console.log(`test 'banana' in the array: `, fruits.includes('banana'));
//  test whether an atoms is not a array 
console.log(`testing "ball" is not in array :`, !fruits.includes('ball'));
