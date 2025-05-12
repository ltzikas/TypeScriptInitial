"use strict";
(() => {
    let avengers = 10;
    console.log({ avengers });
    const villans = 20;
    if (avengers < villans) {
        console.log('Too many villans');
    }
    else {
        console.log('We can handle it');
    }
    avengers = Number('55A'); // NaN    
    console.log({ avengers });
})();
