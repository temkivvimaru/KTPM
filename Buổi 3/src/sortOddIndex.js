export function sortOddIndex(arr) {
    if (!Array.isArray(arr)) throw new Error("Invalid input");

    let oddValues = arr
        .filter((_, i) => i % 2 === 1)
        .sort((a, b) => a - b);

    let index = 0;
    return arr.map((value, i) => {
        if (i % 2 === 1) return oddValues[index++];
        return value;
    });
}
