import { somaMultiplos } from "./somaMultiplos.js";


test("soma multiplos do numero a até um limite N", () => {
    expect(somaMultiplos(5, 20)).toBe(50);
    expect(somaMultiplos(3, 18)).toBe(63);
})