/**
 * FIBONACCI
 * ¿Qué implementación de Fibonacci debería ser más rápida?
 * * Con una iteracion, ya que la recursiva se llama a si misma y debe esperar a que la funcion termine para continuar, esto involucra mucho tiempo
 *  */


let start = performance.now();
// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
console.log(rFib(20));

console.log(`Recursive took ${performance.now() - start} milliseconds to run \n`);


start = performance.now();

// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
console.log(iFib(20));

console.log(`Iterative took ${performance.now() - start} milliseconds to run`);