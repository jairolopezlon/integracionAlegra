/* jshint esversion:8 */
import { capturarContactos } from '../../model/model.capturarContactos.js';

const testCapturarContactos = async () => {
    console.log(await capturarContactos());

}

export {
    testCapturarContactos,
}