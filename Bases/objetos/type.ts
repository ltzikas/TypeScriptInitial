(() => {

    type Hero = {
        name: string,
        age: number,
        powers: string [],
        getName?: () => string
    }

    let flash: Hero = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time travel"],       
    }

    let superman: Hero = {
        name: "Clark Kent",
        age: 60,
        powers: ["Speed"],  
        getName() {
            return this.name;
        }     
    }

    console.log(flash);

})();
