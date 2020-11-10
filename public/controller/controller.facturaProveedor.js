/*jshint esversion: 8*/
import facturaProveedor from '../model/model.facturaProveedor.js';
import capturarDatos from './controller.capturaDatos.js';

const _url = {
    crear: 'https://api.alegra.com/api/v1/bills',
};

export default {
    crear: () => {
        facturaProveedor.crear(_url.crear, capturarDatos.facturaProveedor());
    },
};
