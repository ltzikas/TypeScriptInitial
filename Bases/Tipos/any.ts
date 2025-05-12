(() => {
    // Tipos Any
    let avenger: any = 123;
    let exists;
    let power;
    
    avenger = 'Dr. Strange';
    console.log((avenger as string).charAt(0)); // D

    avenger = 123.456;
    console.log(<number>avenger.toFixed(2)); // 123.46

    console.log(exists); // undefined
    console.log(power); // undefined    

})();