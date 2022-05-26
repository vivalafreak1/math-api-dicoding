const createServer = require('./createServer');
const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A HTTP Server', () => {
    describe('When GET /add/{a}/{b}', () => {
        it('Should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
            // Arrange
            const a = 10;
            const b = 20;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const server = createServer({ mathBasic: MathBasic });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/add/${a}/${b}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(30);
            expect(spyAdd).toBeCalledWith(a, b);
        });
    });

    describe('When GET /subtract/{a}/{b}', () => {
        it('Should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
            // Arrange
            const a = 12;
            const b = 8;
            const spySubtract = jest.spyOn(MathBasic, 'subtract');
            const server = createServer({ mathBasic: MathBasic });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/subtract/${a}/${b}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(4); // a - b
            expect(spySubtract).toBeCalledWith(a, b);
        });
    });

    describe('When GET /multiply/{a}/{b}', () => {
        it('Should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
            // Arrange
            const a = 10;
            const b = 8;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const server = createServer({ mathBasic: MathBasic });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/multiply/${a}/${b}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(80); // a * b
            expect(spyMultiply).toBeCalledWith(a, b);
        });
    });

    describe('When GET /divide/{a}/{b}', () => {
        it('Should respond with a status code of 200 and the payload value is division result of a and b correctly', async () => {
            // Arrange
            const a = 10;
            const b = 5;
            const spyDivide = jest.spyOn(MathBasic, 'divide');
            const server = createServer({ mathBasic: MathBasic });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/divide/${a}/${b}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(2); // a / b
            expect(spyDivide).toBeCalledWith(a, b);
        });
    });

    describe('When GET /rectangle/perimeter/{length}/{width}', () => {
        it('Should respond with a status code of 200 and the payload value is perimeter rectangle result of length and width correctly', async () => {
            // Arrange
            const length = 10;
            const width = 5;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
            const server = createServer({ figureCalculator });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/perimeter/${length}/${width}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(30); // (2 * (length + width))
            expect(spyCalculateRectanglePerimeter).toBeCalledWith(length, width);
        });
    });

    describe('When GET /rectangle/area/{length}/{width}', () => {
        it('Should respond with a status code of 200 and the payload value is area rectangle result of length and width correctly', async () => {
            // Arrange
            const length = 10;
            const width = 5;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
            const server = createServer({ figureCalculator });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/area/${length}/${width}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(50); // length * width
            expect(spyCalculateRectangleArea).toBeCalledWith(length, width);
        });
    });

    describe('When GET /triangle/parameter/{verA}/{verB}/{verC}', () => {
        it('Should respond with a status code of 200 and the payload value is perimeter triangle result of vertice A, vertice B, and vertice C correctly', async () => {
            // Arrange
            const verA = 10;
            const verB = 5;
            const verC = 7;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
            const server = createServer({ figureCalculator });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/triangle/perimeter/${verA}/${verB}/${verC}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(22); // (verA + verB + verC)
            expect(spyCalculateTrianglePerimeter).toBeCalledWith(verA, verB, verC);
        });
    });

    describe('When GET /triangle/area/{height}/{base}', () => {
        it('Should respond with a status code of 200 and the payload value is area triangle result of height and base correctly', async () => {
            // Arrange
            const height = 10;
            const base = 5;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
            const server = createServer({ figureCalculator });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/triangle/area/${height}/${base}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(25); // ((height*base) / 2)
            expect(spyCalculateTriangleArea).toBeCalledWith(height, base);
        });
    });
});