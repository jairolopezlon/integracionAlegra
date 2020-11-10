/*jshint esversion: 8*/
// import contactos from '../model/contactos.js';
import { capturarContactos } from '../model/model.capturarContactos.js';
import contactos from '../model/contactos.js'

const url = {
    listar: 'https://api.alegra.com/api/v1/contacts/',
};

const listarContacto = async () => {
    const contactos = await capturarContactos();
    contactos.forEach(contacto => {
        window.contacto.innerHTML += `<option value="${contacto.id}">${contacto.name}</option>`;
        window.contacto.disabled = false;
    })
}

export default {
    insertarOpciones: () => {
        [window.usuario, window.token].forEach((input) => {
            input.addEventListener('change', () => {
                if (window.usuario.value !== '' && window.token.value !== '') {
                    listarContacto();
                    // contactos.listar(url.listar).then((data) => {
                    //     data.forEach((_contacto) => {
                    //         window.contacto.innerHTML += `<option value="${_contacto.id}">${_contacto.name}</option>`;
                    //         window.contacto.disabled = false;
                    //     });
                    // });
                }
            });
        });
        if (window.usuario.value !== '' && window.token.value !== '') {

            listarContacto();
            // contactos.listar(url.listar).then((data) => {
            //     data.forEach((_contacto) => {
            //         window.contacto.innerHTML += `<option value="${_contacto.id}">${_contacto.name}</option>`;
            //         window.contacto.disabled = false;
            //     });
            // });
        }
    },
};
