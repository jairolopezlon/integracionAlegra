/*jshint esversion: 8*/
import request from './request.js';

async function traerProductos(idInicio, dataConsolidad = []) {
    const url = `https://api.alegra.com/api/v1/items/?start=${idInicio}&order_direction=ASC&order_field=id&metadata=true`;
    const countItems = dataConsolidad.length;
    const { metadata, data } = await request._get(url);
    const btnListar = document.getElementsByName('copiar_content_tabla')[0];
    const msgAlert = window.msgAlert;
    msgAlert.textContent = `Descargando... ${countItems} de ${metadata.total} productos`;
    const barProgreso = window.bar_progreso;

    if (data.length === 0) {
        let tablaCodeHTML = '';
        dataConsolidad.forEach((producto) => {
            let taxId = 1,
                tax = null,
                _name = '',
                _codigo = '';
            if (producto.tax.length !== 0) {
                tax = producto.tax[0].percentage;
                taxId = tax.includes('19') ? 3 : 1;
            }
            producto.customFields.forEach((campo) => {
                if (campo.id === '17') {
                    _name = campo.name;
                    _codigo = campo.value;
                }
            });
            tablaCodeHTML += `<tr>
            <td>${_codigo}</td>
            <td>${producto.id}</td>
            <td>${producto.name}</td>
            <td>${taxId}</td>
            <td>${tax}</td>
            </tr>`;
        });
        window.tabla_salida_informacion.innerHTML = tablaCodeHTML;
        msgAlert.textContent = `Descargados ${countItems} productos`;
        msgAlert.classList.replace('alert-info', 'alert-success');
        let avance = (countItems / metadata.total) * 100;
        barProgreso.style.width = `${avance}%`;
        barProgreso.textContent = `${countItems} de ${metadata.total}`;
        btnListar.classList.remove('disabled');
        btnListar.disabled = false;
    } else {
        let nuevoIdInicio = idInicio;
        [...data].forEach((producto) => {
            dataConsolidad.push(producto);
            nuevoIdInicio += 1;
        });
        msgAlert.textContent = `Descargando... ${countItems} de ${metadata.total} productos`;
        let avance = (countItems / metadata.total) * 100;
        barProgreso.style.width = `${avance}%`;
        barProgreso.textContent = `${countItems} de ${metadata.total}`;
        traerProductos(nuevoIdInicio, dataConsolidad);
    }
}

export default {
    traerProductos,
};
