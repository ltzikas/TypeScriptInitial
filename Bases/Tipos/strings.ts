(() => {

    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna Verde";
    const volcanNegro:string = `Héroe: Volcán Negro`;

    const abc = 123;

    console.log(`I'm ${batman}`);

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No hay un héroe en la posición 10'); // Optional Chaining

})()