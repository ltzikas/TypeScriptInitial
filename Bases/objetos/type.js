"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time travel"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Speed"],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
