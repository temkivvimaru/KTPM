export function isEven(n) {
    if (typeof n !== "number") {
        throw new Error("Invalid input");
    }

    if (n % 2 === 0) {
        return true;  
    } else {
        return false; 
    }
}
