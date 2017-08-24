const inverse = ( x ) => x * -1;

const add = ( y ) => ( x ) => x + y;
const subtract = ( y ) => ( x ) => add( inverse( y ) )( x ) ;

const divide = ( y ) => ( x ) => {

    let result = 0;
    
    const subtractX = subtract( x );
    const incremet1 = add( 1 );

    while( y >= x ){
        y = subtractX( y );
        result = incremet1( result );
    }

    return result;
}

console.log("4 / 2 = ", divide( 4 )( 2 ));

