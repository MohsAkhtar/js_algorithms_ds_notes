function compareIntegers(a: string, b: string): string {
    const aParsed = parseInt(a);
    const bParsed = parseInt(b);

    if(aParsed === bParsed){
        return "equal";
    } else if (aParsed < bParsed) {
        return "less";
    } else if (aParsed > bParsed) {
        return "greater";
    }
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));