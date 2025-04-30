function parse( data ) {
    
    if (data.length === 0) {
        return 0;
    }
    
    let result = [];
    let value = 0;

    Array.from(data).forEach(letter => {
        switch (letter) {
            case 'i':
                value++
                break;
            case 'd':
                value--;
                break;
            case 's':
               value = Math.pow(value, 2);
                break;
            case 'o':
                result.push(value)
                break;
            default:
                break;
        }
    });
    return result;
}

parse("iiisdosodddddiso")
