const {
    describe,
    it,
    expect,
    matchers,
    add,
    multiply,
    subtract,
    divide }  = require('./index')



    describe('add',()=>{
        it('adds two numbers', () => {
            const result = add(5,10)
            expect(result).toBe(15)
        })
    })


    
    describe('subtract',()=>{
        it('subtract second number from frist', () => {
            const result = subtract(20,10)
            expect(result).toBe(10)
        })
    })

    
    describe('multiply',()=>{
        it('Multiplication of two numbers', () => {
            const result = multiply(5,10)
            expect(result).toBe(50)
        })
    })

    
    describe('divide',()=>{
        it('Divide first number by second number', () => {
            const result = divide(5,10)
            expect(result).toBe(0.5)
        })
    })