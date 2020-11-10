/* jshint esversion:8 */
import request from './request.js'

const capturarContactos = async (start = 0, accData = []) => {
    let listadoContacto = accData;
    const url = `https://api.alegra.com/api/v1/contacts/?start=${start}&limit=30&order_direction=ASC&order_field=name`;
    const data = await request._get(url)
    let cuentaRegistros = start + data.length;

    if (data.length === 0) {
        return listadoContacto;
    } else {
        listadoContacto = listadoContacto.concat(data);
        return capturarContactos(cuentaRegistros, listadoContacto);
    }
}

export {
    capturarContactos,
}