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
    calculateRectangleArea(...args) { 
        if(args.length !== 2){
            throw new Error('Fungsi hanya menerima dua parameter');
        }

        const [length, width] = args; 

        if(typeof length !== 'number' || typeof width !== 'number'){
            throw new Error('Fungsi hanya menerima parameter number');
        }

        return (length*width);
    }
    calculateTrianglePerimeter(...args) { 
        if(args.length !== 3){
            throw new Error('Fungsi hanya menerima tiga parameter');
        }

        const [verA, verB, verC] = args; 

        if(typeof verA !== 'number' || typeof verB !== 'number' || typeof verC !== 'number'){
            throw new Error('Fungsi hanya menerima parameter number');
        }

        return (verA+verB+verC);
    }
    calculateTriangleArea(...args) { 
        if(args.length !== 2){
            throw new Error('Fungsi hanya menerima tiga parameter');
        }

        const [height, base] = args; 

        if(typeof height !== 'number' || typeof base !== 'number'){
            throw new Error('Fungsi hanya menerima parameter number');
        }

        return ((height*base)/2);
    }
}

module.exports = FigureCalculator;