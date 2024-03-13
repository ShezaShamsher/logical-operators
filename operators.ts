// There are 3 types of logical operators
// and operator
let num_1 : number = 8 ;
let num_2 : number = 9 ;
console.log( (num_1 < num_2) && (6 < 7) );

console.log( (num_1 < num_2) && (7 > 9) );


// or operator
let num_3 : number = 4 ;
let num_4 : number = 4 ;
console.log( (num_3 == num_4) || (4 == 4) );


console.log( (num_3 != num_4) || (8 > 7) );

// nor operator if your answer is true this operator opposite into false

let num_9 : number = 12 ;
let num_10 : number = 10 ;
console.log( !(num_9 > num_10) );
