/*
    js-related features - variable declarations, conditions, loops
    browser-related features - console, timer, alert
    "" - double quotes
    '' - signle quotes
    `` - backtics

    curly brackets - {}
    square brackent - []
*/

// const - constant variables
// let - regular variables

let und;
// console.log(und);
// console.log(typeof und);

let num = 100;
// console.log(typeof num);

let firstname = 'Seyfi';
// console.log(typeof firstname);

let user = {
    firstname: 'Ali',
    lastname: 'Mammadov',
    age: 20,
    favorite_sports: ['football', 'basketball'],
    isSmoking: false 
}

// console.log(typeof user);

// console.log(typeof user.favorite_sports)

// console.log(typeof user.isSmoking);

// console.log(typeof null);

// console.log(typeof typeof undefined);

const age = 20;
const university = 'BHOS';
const isSmoking = false;

// ternary operator
// console.log(`Ali's age is ${age}. He studies at ${university}. he is ${isSmoking ? 'smoking' : 'not smoking'}`)

/* 
        ---type coersion---
    truthy values | falsy values 
        true            false
        {}              0
        []              ''
        ' '             null
        integers        undefined
*/


// console.log('' == 0);
// console.log(" " == 1);
// console.log(" " == true)
// console.log(true == true);

// Control flow

// const userAge = +prompt('please enter your age'); // 30

// if (userAge < 18 && userAge > 0) {
//     alert("ti je ne beybi");
// } else if (userAge >= 18 && userAge <= 30) {
//     alert("hele cavan oghlansan sen");
// } else if (userAge > 30 && userAge <= 40) {
//     alert("welcome to orta yash sindrom");
// } else {
//     alert("qocaldin getdin");
// }

// const weekday = prompt('please enter weekday');


// switch (weekday.toLowerCase()) {
//     case 'monday':
//         alert('you only have one meeting today')
//         break;
//     case 'tuesday':
//         alert('you don\'t have any meeting today')
//         break
//     case 'wednesday':
//         alert('you have an interview today')
//         break
//     default:
//         alert('you entered wrong week day');
//         break
// }

// for (let i = 50; i <= 100; i+=2) {
//     console.log(i);
// }

// let i = 0;

// while (i < 100) {
//     console.log(i);
// }

// do {
    
// } while (condition);

// console.log(true && false);
// console.log(false && true);
// console.log(false || false);
// console.log(true || false);

// console.log(false || false || false && true);

console.log('false' || undefined || true); // "false"
// ------
console.log('salam' && false || 'sagh ol'); // "sagh ol"
// ------
console.log('or' && 'and' || false); // "and"
// ------
console.log(false || '' || 'false'); // "false"
// ------
console.log(true && false || 'salam');
// ------
console.log([] && {} && undefined || 'salam');
// ------
console.log(0 && 'salam' && 'saol'); 
// ------
console.log(5 && false || '3');
// ------
