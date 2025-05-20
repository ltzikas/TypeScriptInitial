(() => {

    let flash: { name: string, age: number, powers: string [], getName: () => string } = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time travel"],
        getName() {
             return this.name;
        }
    }

    flash = {
        name: "Clark Kent",
        age: 30,
        powers: ["Super strength", "Flight"],
        getName() {
            return this.name;
        }
    }

    console.log(flash);

})();
