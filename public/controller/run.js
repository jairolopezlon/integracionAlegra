/*jshint esversion: 8*/
import contactos from './contactos.js';
import capturarBotones from './capturarBoton.js';
import userToken from './userToken.js';

export default function runController() {
    capturarBotones();
    window.addEventListener('load', () => {
        if (userToken.validarTemp()) {
            userToken.copiarTemp();
            // contactos.insertarOpciones();
        }
        if (window.contacto) {
            contactos.insertarOpciones();
        }
    });
}
