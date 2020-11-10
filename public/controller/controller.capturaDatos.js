/*jshint esversion: 8*/

const capturaDatos = (origenData) => {
    // console.log(origenData)
    return origenData.split('\n')
        .filter(row => row.match(/\d+\t\d+.*\d*\t\d+/))
        .map((row) => row.split('\t'))
        .filter((row) => row.length > 1);
}

const datos = (descripcion, contacto) => {
    const objData = {};
    objData[contacto] = window.contacto.value;
    objData.date = window.fecha_factura.value;
    objData.dueDate = window.fecha_factura_vencimiento.value;
    const productos = [];

    const inputData = capturaDatos(window.inputData.value)
    // .split('\n')
    // .map((row) => row.split('\t'))
    // .filter((row) => row.length > 1);

    inputData.forEach((row) => {
        row[0] = parseInt(row[0]);
        row[1] = parseFloat(row[1]);
        row[2] = parseInt(row[2]);
        const impuesto =
            row[4] === 'null' ? [{ id: 1 }] : [{ id: parseInt(row[4]) }];

        productos.push({
            id: row[0],
            price: row[1],
            quantity: row[2],
            [descripcion]: row[3],
            tax: impuesto,
        });
    });

    if (contacto === 'client') {
        objData.items = productos;
    } else {
        objData.purchases = {
            items: productos,
        };
    }
    return objData;
};

export default {
    capturaDatos,
    remision: () => {
        return datos('description', 'client');
    },
    facturaProveedor: () => {
        return datos('observations', 'provider');
    },
};
