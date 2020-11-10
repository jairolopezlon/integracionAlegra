/*jshint esversion: 8*/

import togglerClass from './togglerClass.js';
import listarProductos from '../model/model.listarProductos.js';

export default {
    traerProductos: () => {
        const btnListar = document.getElementsByName('copiar_content_tabla')[0];
        const msgAlert = window.msgAlert;
        const barProgreso = window.bar_progreso;
        window.tabla_salida_informacion.innerHTML = '';
        barProgreso.style.width = `0%`;
        btnListar.disabled = true;
        btnListar.classList.add('disabled');
        msgAlert.classList.replace('alert-success', 'alert-info');
        window.msgAlert.textContent = `Descargando... 0 productos`;
        listarProductos.traerProductos(0);
    },
};
