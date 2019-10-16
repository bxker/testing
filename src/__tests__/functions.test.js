const {sum, sayName} = require('../functions')

//suites
describe("Sum function should perform correctly", () => {
    test(`"sum" function should return the sum of its parameters`, () => {
        expect(sum(1, 2)).toBe(3);
    })
    
    test(`"sum(2, 4)" should return 6 `, () => {
        expect(sum(2,4)).toBe(6);
    })
})

// describe('sayName function should perform correctly', () => {
//     test(`"sayName" should return the value of the name parameter`, () => {
//         expect(sayName('Noel')).toBe('Noel')
//     })
//     test(`"sayName" should return the default value of the name parameter`, () => {
//         expect(sayName()).toBe('Jacob')
//     })
//     test(`"sayName" should return the that the name should be a typeof string`, () => {
//         expect(sayName(4)).toBe('Name should be a string')
//     })
// })


test("object assignment", ()=>{
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2})
    expect(true).toBe(true)
    expect("asdf").toBeTruthy();

    const names = ["Chris", "Zack", "Jacob"]
    expect(names).toContain["Zack"]
})


