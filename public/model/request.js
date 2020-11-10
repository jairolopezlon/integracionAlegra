/*jshint esversion: 8*/
import userToken from '../controller/userToken.js';

const autorizacion = () => {
    let auth = '';
    let user = window.usuario;
    let token = window.token;

    if (userToken.validarTemp()) {
        auth = `Basic ${btoa(`${user.value}:${token.value}`)}`;
    } else {
        [user, token].forEach((input) => {
            input.addEventListener('change', () => {
                auth = `Basic ${btoa(`${user.value}:${token.value}`)}`;
            });
            auth = `Basic ${btoa(`${user.value}:${token.value}`)}`;
        });
    }
    return auth;
};

const _post = async (url, data) => {
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            Authorization: autorizacion(),
        }),
    })
        .then((res) => res.json())
        .catch((error) => console.error('Error:', error))
        .then((response) => {
            console.log(response);
            userToken.guardarTemp();
            let msgId = '';
            if (response.id) {
                msgId = `- id del registros cargado: ${response.id}`;
                alert(`producto cargado ${msgId}`);
            }
            if (response.code === 10016) {
                alert(response.message);

            }
        });
};

const _get = async (url) => {
    return await fetch(url, {
        method: 'GET',
        headers: new Headers({
            Authorization: autorizacion(),
        }),
    })
        .then((res) => res.json())
        .catch((error) => console.error('Error:', error))
        .then((response) => {
            userToken.guardarTemp();
            return response;
        });
};

export default {
    _post,
    _get,
};
