(() => {

    const fullname = (firstName: string, lastName?: string,upper: boolean = false): string => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name provided'}`.toUpperCase();
        }
        else
            return `${firstName} ${lastName || 'No last name provided'}`;
    }

    let name: string = fullname('Bruce');
    console.log({name});  
    
    name = fullname('Bruce', 'Wayne');
    console.log({name});  
    
    name = fullname('Bruce', 'Wayne', true);
    console.log({name});  

})();