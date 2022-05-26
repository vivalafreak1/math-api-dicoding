const createServer = require('./createServer');
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
});