/*jshint esversion: 8*/

const url = {
    factura_venta: 'https://api.alegra.com/api/v1/invoices',
    factura_proveedor: 'https://api.alegra.com/api/v1/bills',
    remision: 'https://api.alegra.com/api/v1/remissions',
};

function traerProducto(idInicio, data = []) {
    const listaProductos = data;
    const token = 'aee0d7c69108bc80c2e4';
    const usuario = 'kellytatiana.roley@gmail.com';
    const url = `https://api.alegra.com/api/v1/items/?start=${idInicio}&order_direction=ASC&order_field=id&metadata=true`;
    const countItems = data.length;

    fetch(url, {
        method: 'GET',
        headers: new Headers({
            Authorization: `Basic ${btoa(`${usuario}:${token}`)}`,
        }),
    })
        .then((res) => res.json())
        .then((response) => {
            if (response.length === 0) {
                let tabla_html = '';
                listaProductos.forEach((producto) => {
                    // console.log(producto)
                    let tax = null;
                    let taxID = 1;
                    if (producto['tax'].length !== 0) {
                        tax = producto['tax'][0]['percentage'];
                        taxID = tax.includes('19') ? 3 : 1;
                    }
                    let _name = '';
                    let _codigo = '';

                    producto['customFields'].forEach((campo) => {
                        if (campo.id === '17') {
                            _name = campo.name;
                            _codigo = campo.value;
                        }
                    });
                    tabla_html += `<tr>
                    <td>${_codigo}</td>
                    <td>${producto['id']}</td>
                    <td>${producto['name']}</td>
                    <td>${taxID}</td>
                    <td>${tax}</td>
                </tr>`;
                });
                window.tabla_salida_informacion.innerHTML = tabla_html;
                window.contador_progreso.textContent = `Descargandos: ${countItems} items`;
            } else {
                let nuevoInicio = idInicio;

                [...response].forEach((producto) => {
                    listaProductos.push(producto);
                    if (producto['id'] > nuevoInicio) {
                        nuevoInicio = producto['id'];
                    }
                });
                console.log(nuevoInicio);
                window.contador_progreso.textContent = `Descargando... procesados: ${countItems} items`;
                traerProducto(nuevoInicio, listaProductos);
            }
        });
}

window.listar_productos.addEventListener('click', () => {
    traerProducto(550);
});
