(() => {

    const addNumbers = (a: number, b: number): number => a + b;
    
    const greet = (name: string): string => `Hello ${name}`;
    

    const saveTheWorld = (): string => 'The world is saved!';
       
    let myFunctionAddNumber: (x: number, y: number) => number;
    let myFunctionGreet: (x: string) => string;
    let myFunctionSaveTheWorld: () => string;

    myFunctionAddNumber = addNumbers;
    console.log(myFunctionAddNumber(1,2));

    myFunctionGreet = greet;
    console.log(myFunctionGreet('Bruce'));
    
    myFunctionSaveTheWorld = saveTheWorld;
    console.log(myFunctionSaveTheWorld());

})();