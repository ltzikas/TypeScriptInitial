(() => {

    const fullname = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'No last name provided'}`;
    }
    const name = fullname('Bruce');
    console.log(name);  

})();