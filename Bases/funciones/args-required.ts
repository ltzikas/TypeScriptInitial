(() => {

    const fullname = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }
    const name = fullname('Bruce', 'Wayne');
    console.log(name);  

})();