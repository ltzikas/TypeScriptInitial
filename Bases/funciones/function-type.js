"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => 'The world is saved!';
    let myFunctionAddNumber;
    let myFunctionGreet;
    let myFunctionSaveTheWorld;
    myFunctionAddNumber = addNumbers;
    console.log(myFunctionAddNumber(1, 2));
    myFunctionGreet = greet;
    console.log(myFunctionGreet('Bruce'));
    myFunctionSaveTheWorld = saveTheWorld;
    console.log(myFunctionSaveTheWorld());
})();
