"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    ;
    const activateBatSignal = (message) => {
        return "BatSignal: " + message;
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
})();
