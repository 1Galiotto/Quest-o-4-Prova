const formulario = document.getElementById('formulario');
const resultados = document.getElementById('resultados');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const numero3 = parseInt(document.getElementById('numero3').value);

    let somaPares = 0;
    let somaImpares = 0;
    let somaTotal = 0;

    if (numero1 % 2 === 0) {
        somaPares += numero1;
    } else {
        somaImpares += numero1;
    }

    if (numero2 % 2 === 0) {
        somaPares += numero2;
    } else {
        somaImpares += numero2;
    }

    if (numero3 % 2 === 0) {
        somaPares += numero3;
    } else {
        somaImpares += numero3;
    }

    somaTotal = somaPares + somaImpares;

    resultados.innerHTML = `
        <p>| Resultados:</p>
        <p>Soma dos Pares: ${somaPares}</p>
        <p>Soma dos Ímpares: ${somaImpares}</p>
        <p>Soma Total: ${somaTotal}</p>
    `;
});
