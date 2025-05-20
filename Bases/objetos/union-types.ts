(() => {

    type Hero = {
        name: string,
        age: number,
        powers: number [],
        getName?: () => string
    }

    let myCustomVariable: string | number | Hero = "Fernando";

    console.log(typeof myCustomVariable);

    myCustomVariable = 123;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: "Bruce",
        age: 42,
        powers: [1],
    }   
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})();
