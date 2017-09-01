const pow = ( y ) => ( x ) => Math.pow( x, y);
const root = ( y ) => ( x ) => Math.pow( x, 1/y);

const squareRoot = root( 2 );
const cubicRoot = root( 3 );
const fourRoot = root( 4 );



console.log('Raiz quadrada de 9 =', squareRoot( 9 ));
console.log('Raiz cúbica de 27 =', cubicRoot( 27 ));
console.log('Raiz quarta de 16 =', fourRoot( 16 ));