const MathBasic = {
    add: (...args) => {
        if(args.length < 2 || args.length > 2){
            throw new Error('Fungsi add hanya menerima dua parameter');
        }
        
        const [a, b] = args; //const a = args[0]; const b = args[1]

        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('Fungsi hanya menerima parameter number');
        }

        return a + b;
    },
    subtract: (...args) => {
        if(args.length < 2 || args.length > 2){
            throw new Error('Fungsi add hanya menerima dua parameter');
        }
        
        const [a, b] = args; //const a = args[0]; const b = args[1]

        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('Fungsi hanya menerima parameter number');
        }

        return a - b;

    },
    multiply: function multiply(){

    },
    divide: function (){

    },
};

module.exports = MathBasic;