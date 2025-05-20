"use strict";
(() => {
    let myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 123;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 42,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
