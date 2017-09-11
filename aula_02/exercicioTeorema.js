const add = ( y ) => ( x ) => x + y;
const pow = ( y ) => ( x ) => Math.pow( x, y);
const root = ( y ) => ( x ) => Math.pow( x, 1/y);

const squareRoot = root( 2 );
const elevacao = pow( 2 );

const teoremaDePitagoras = ( b, c ) => {
    
    const a = add(elevacao( b ))( elevacao( c ))

    return squareRoot( a );
}

console.log( teoremaDePitagoras( 9, 12 ) )
