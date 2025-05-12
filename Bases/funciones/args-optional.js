"use strict";
(() => {
    const fullname = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name provided'}`;
    };
    const name = fullname('Bruce');
    console.log(name);
})();
