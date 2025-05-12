(() => {
    let avengers:number = 10;

    console.log({avengers});

    const villans:number = 20;

    if (avengers < villans) {
        console.log('Too many villans');
    } else {
        console.log('We can handle it');
    }

    avengers = Number('55A'); // NaN    

    console.log({avengers});
        
})();