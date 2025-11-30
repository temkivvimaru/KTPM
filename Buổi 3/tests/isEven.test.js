import { isEven } from "../src/isEven.js";

describe("isEven()", () => {

    test("Số chẵn: 2 → true", () => {
        expect(isEven(2)).toBe(true);
    });

    test("Số lẻ: 3 → false", () => {
        expect(isEven(3)).toBe(false);
    });

    test("Số 0 là số chẵn", () => {
        expect(isEven(0)).toBe(true);
    });

    test("Số âm chẵn: -4 → true", () => {
        expect(isEven(-4)).toBe(true);
    });

    test("Số âm lẻ: -5 → false", () => {
        expect(isEven(-5)).toBe(false);
    });

    test("Giá trị không hợp lệ → ném lỗi", () => {
        expect(() => isEven("abc")).toThrow("Invalid input");
    });
});
