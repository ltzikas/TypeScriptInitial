"use strict";
(() => {
    const fullname = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name provided'}`.toUpperCase();
        }
        else
            return `${firstName} ${lastName || 'No last name provided'}`;
    };
    let name = fullname('Bruce');
    console.log({ name });
    name = fullname('Bruce', 'Wayne');
    console.log({ name });
    name = fullname('Bruce', 'Wayne', true);
    console.log({ name });
})();
