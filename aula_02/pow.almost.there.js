const pow = ( y ) => ( x ) => Math.pow( x, y);

console.log('3 ^ 2 =', pow( 2 )( 3 ));
console.log('3 ^ 3 =', pow( 3 )( 3 ));
console.log('3 ^ 4 =', pow( 4 )( 3 ));
console.log('3 ^ 5 =', pow( 5 )( 3 ));