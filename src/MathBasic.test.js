const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
    it('Should contain add, subtract, multiply, and divide function', () => {
        expect(MathBasic).toHaveProperty('add');
        expect(MathBasic).toHaveProperty('subtract');
        expect(MathBasic).toHaveProperty('multiply');
        expect(MathBasic).toHaveProperty('divide');
        expect(MathBasic.add).toBeInstanceOf(Function);
        expect(MathBasic.subtract).toBeInstanceOf(Function);
        expect(MathBasic.multiply).toBeInstanceOf(Function);
        expect(MathBasic.divide).toBeInstanceOf(Function);
    });

    describe('A add function', () => {
        it('Should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.add()).toThrowError();
            expect(() => MathBasic.add(1)).toThrowError();
            expect(() => MathBasic.add(1, 2, 3)).toThrowError();
            expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
        });

        it('Should throw error when given non-number parameters', () => {
            expect(() => MathBasic.add('1', '2')).toThrowError();
            expect(() => MathBasic.add(true, {})).toThrowError();
            expect(() => MathBasic.add(null, false)).toThrowError();
        });

        it('Should return a + b when given two number parameters', () => {
            expect(MathBasic.add(2, 2)).toEqual(4);
            expect(MathBasic.add(16, 8)).toEqual(24);
            expect(MathBasic.add(3, 7)).toEqual(10);
        });
    });

    describe('A subtract function', () => {
        it('Should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.subtract()).toThrowError();
            expect(() => MathBasic.subtract(1)).toThrowError();
            expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
            expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError();
        });

        it('Should throw error when given non-number parameters', () => {
            expect(() => MathBasic.subtract('4', '2')).toThrowError();
            expect(() => MathBasic.subtract(true, {})).toThrowError();
            expect(() => MathBasic.subtract(null, false)).toThrowError();
        });

        it('Should return a - b when given two number parameters', () => {
            expect(MathBasic.subtract(5, 2)).toEqual(3);
            expect(MathBasic.subtract(16, 8)).toEqual(8);
            expect(MathBasic.subtract(7, 3)).toEqual(4);
        });
    });

    describe('A multiply function', () => {
        it('Should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.multiply()).toThrowError();
            expect(() => MathBasic.multiply(1)).toThrowError();
            expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
            expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
        });

        it('Should throw error when given non-number parameters', () => {
            expect(() => MathBasic.multiply('4', '2')).toThrowError();
            expect(() => MathBasic.multiply(true, {})).toThrowError();
            expect(() => MathBasic.multiply(null, false)).toThrowError();
        });

        it('Should return a * b when given two number parameters', () => {
            expect(MathBasic.multiply(5, 2)).toEqual(10);
            expect(MathBasic.multiply(16, 8)).toEqual(128);
            expect(MathBasic.multiply(7, 3)).toEqual(21);
        });
    });

});