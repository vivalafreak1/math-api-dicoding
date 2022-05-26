const FigureCalculator = require('./FigureCalculator');

describe('A FigureCalculator', () => {
    it('Should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleAriea functions', () => {
        const figureCalculator = new FigureCalculator({});

        expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');        
        expect(figureCalculator).toHaveProperty('calculateRectangleArea');
        expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateTriangleArea');
        expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
    });

    describe('A calculateRectanglePerimeter function', () => {
        it('Should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
        });

        it('Should throw error when given non-number parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectanglePerimeter('1', '2')).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter(null, false)).toThrowError();
        });

        it('Should return rectangle perimeter when given two number parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(figureCalculator.calculateRectanglePerimeter(2, 2)).toEqual(8);
            expect(figureCalculator.calculateRectanglePerimeter(10, 5)).toEqual(30);
            expect(figureCalculator.calculateRectanglePerimeter(3, 7)).toEqual(20);
        });
    });

    describe('A calcualteRectangleArea Function', () => {
        it('Should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(2)).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(3, 5, 1)).toThrowError();            
        });

        it('Should throw error when given non-number parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectangleArea('1', '2')).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea([], {})).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(null, false)).toThroArea
        });

        it('Should return rectangle area when given two number parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(figureCalculator.calculateRectangleArea(2, 2)).toEqual(4);
            expect(figureCalculator.calculateRectangleArea(10, 5)).toEqual(50);
            expect(figureCalculator.calculateRectangleArea(3, 7)).toEqual(21);
        });
    });
});