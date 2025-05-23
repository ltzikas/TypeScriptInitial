"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 123.456;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villains = ['Lex Luthor', 'Red Skull', 'Doom'];
    villains.forEach(villain => {
        console.log(villain.toUpperCase());
    });
    numbers.forEach(villain => {
        console.log(villain);
    });
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
})();
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
})();
(() => {
    let isActive = undefined;
    console.log(isActive);
})();
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
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcán Negro`;
    const abc = 123;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay un héroe en la posición 10');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
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
(() => {
    const fullname = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name provided'}`;
    };
    const name = fullname('Bruce');
    console.log(name);
})();
(() => {
    const fullname = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullname('Bruce', 'Wayne');
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => 'The world is saved!';
    let myFunctionAddNumber;
    let myFunctionGreet;
    let myFunctionSaveTheWorld;
    myFunctionAddNumber = addNumbers;
    console.log(myFunctionAddNumber(1, 2));
    myFunctionGreet = greet;
    console.log(myFunctionGreet('Bruce'));
    myFunctionSaveTheWorld = saveTheWorld;
    console.log(myFunctionSaveTheWorld());
})();
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
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time travel"],
        getName() {
            return this.name;
        }
    };
    flash = {
        name: "Clark Kent",
        age: 30,
        powers: ["Super strength", "Flight"],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
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
(() => {
    let myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 123;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 42,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
//# sourceMappingURL=main.js.map