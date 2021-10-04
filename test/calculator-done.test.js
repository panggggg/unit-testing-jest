const _calculator = require('../app/calculator')

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