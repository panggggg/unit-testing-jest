class CalculatorError {
    add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b
        }
        throw Error('Inputs should be numbers')
    }

    substract(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b
        }
        throw Error('Inputs should be numbers')
    }

    multiply(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a * b
        }
        throw Error('Inputs should be numbers')
    }
}

module.exports = new CalculatorError()