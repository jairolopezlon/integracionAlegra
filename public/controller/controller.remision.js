/*jshint esversion: 8*/
import remision from '../model/model.remision.js';
import capturarDatos from './controller.capturaDatos.js';

const _url = {
    crear: 'https://api.alegra.com/api/v1/remissions',
};

export default {
    crear: () => {
        remision.crear(_url.crear, capturarDatos.remision());
    },
};
