'use strict'

function escribeTras2Segundo(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}



function serie(n, fn, callback) {
    if (n == 0) {
        //termino el bucle
        callback();
        return
    }
    n = n-1;
    fn('texto' + n, function() {
        serie(n, fn, callback)
    })
} 

serie (5, escribeTras2Segundo, function() {
    console.log('Fin')
})



