let numeroIngresado = prompt("Por favor ingresá un numero", "numero"); 
const NUMERO_REFERENCIA = 3
if (numeroIngresado == NUMERO_REFERENCIA){

    document.write(`
        <h3> ¡Si es igual a 3 ! </h3>
    `);
}
else if(numeroIngresado < NUMERO_REFERENCIA){

    document.write(`
        <h3> Es menor que ${NUMERO_REFERENCIA} :( </h3>
    `);
}
else{

    document.write(`
        <h3> Es mayor que ${NUMERO_REFERENCIA} :( </h3>
    `);
}
