const _calculator = require('../app/calculator')

describe("Testing with done", () => {

    test('Adding two numbers', (done) => {
        expect(_calculator.add(5, 5)).toStrictEqual(10)
        done()
    })
    
    test('Subtracting two numbers', (done) => {
        expect(_calculator.substract(5, 5)).toStrictEqual(0)
        done()
    })
    
    test('Multiplying two numbers', (done) => {
        expect(_calculator.multiply(5, 5)).toStrictEqual(25)
        done()
    })

})

describe('Testing with async', () => {

    test('Adding two numbers', async () => {
        expect(_calculator.add(5, 5)).toStrictEqual(10)
    })
    
    test('Subtracting two numbers', async () => {
        expect(_calculator.substract(10, 5)).toStrictEqual(5)
    })
    
    test('Multiplying two numbers', async () => {
        expect(_calculator.multiply(10, 5)).toStrictEqual(50)
    })

})