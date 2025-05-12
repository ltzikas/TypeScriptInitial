(() => {

    const hero: string = 'Flash';

    function returnName(): string{
        return hero;
    };

    const activateBatSignal = (message: string): string => {
        return "BatSignal: " + message;
    };

    console.log(typeof activateBatSignal);

    const heroName: string = returnName();


})();