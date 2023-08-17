// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
})();

// ; its problem

( (name) => console.log(`DB CONNECT SUCCESFULLY ${name}`) )('Ritam')                                                        