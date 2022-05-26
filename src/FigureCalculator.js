class FigureCalculator {
    constructor(mathBasic){
        this._mathBasic = mathBasic;
    }

    calculateRectanglePerimeter(...args) { 
        if (args.length !== 2){
            throw new Error('Fungsi hanya menerima dua parameter');
        }

        const [length, width] = args; //const a = args[0]; const b = args[1]

        if(typeof length !== 'number' || typeof width !== 'number'){
            throw new Error('Fungsi hanya menerima parameter number');
        }

        return (2 * (length + width));
        //return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
    }
    calculateRectangleArea() { }
    calculateTrianglePerimeter() { }
    calculateTriangleArea() { }
}

module.exports = FigureCalculator;