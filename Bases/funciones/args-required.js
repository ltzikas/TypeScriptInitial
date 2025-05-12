"use strict";
(() => {
    const fullname = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullname('Bruce', 'Wayne');
    console.log(name);
})();
