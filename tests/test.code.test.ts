import {sum} from '../src/index'

describe("teste", () => {
    it("teste sum values" , () => {
        const a: number = 5
        const b: number = 5

        expect(sum(a, b)).toEqual(10)
    })
})