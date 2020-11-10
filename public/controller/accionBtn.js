/*jshint esversion: 8*/
import remision from './controller.remision.js';
import facturaProveedor from './controller.facturaProveedor.js';
import listarProductos from './controller.listarProductos.js';
import copiarInfoTabla from './copiarInfoTabla.js';
import test from '../test/index.js';

const url = {
    listar: 'https://api.alegra.com/api/v1/contacts/',
};

export default {
    borrar_inputData: () => (window.inputData.value = ''),
    cargar_remision: () => remision.crear(),
    cargar_factura_proveedor: () => facturaProveedor.crear(),
    copiar_content_tabla: () =>
        copiarInfoTabla.copiarInfo('tabla_lista_productos'),
    listar_productos: listarProductos.traerProductos,
    btn_test_capturar_datos: () => test.capturaDatoResultado(),
    btn_test_capturar_contactos: () => test.testCapturarContactos(),
};
