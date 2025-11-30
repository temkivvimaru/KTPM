export function isEven(n) {
    if (typeof n !== "number") {
        throw new Error("Invalid input");
    }
    return n % 2 === 0;
}
