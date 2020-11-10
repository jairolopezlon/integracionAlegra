/*jshint esversion: 8*/
import capturaDatos from '../../controller/controller.capturaDatos.js';

const expectedValue = [["5", "100", "5", "LOTE: 5456 FV: 25/08/2021", "1"], ["6", "200", "1", "LOTE: 1212 FV: 26/12/2021", "1"], ["461", "4666.54", "1", "LOTE: 12222 FV: 25/10/2026", "3"],
["8", "548.9", "1", "LOTE: 3333 FV: 12/05/2020", "1"], ["9", "500", "9", "LOTE: 6565 FV: 30/12/1899", "1"]]

const captura = async () => {
    const res = await fetch('./captura-datos/datos.txt');
    const data = await res.text();
    return capturaDatos.capturaDatos(data);
}

const comparaResultado = (resultado, resultadoEsperado) => {
    return JSON.stringify(resultado) === JSON.stringify(resultadoEsperado)
}


const capturaDatoResultado = () => {
    captura().then(arrdata => {
        console.log(`resultado prueba comparativa resultado: ${comparaResultado(arrdata, expectedValue)}`)
        console.log(arrdata)
    })

    // captura().then(data => {
    // })
}

export {
    capturaDatoResultado,
}