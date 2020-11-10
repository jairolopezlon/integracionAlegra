/*jshint esversion: 8*/

const validarTemp = () => {
    return localStorage.user && localStorage.token;
};
const guardarTemp = () => {
    localStorage.user = window.usuario.value;
    localStorage.token = window.token.value;
};
const copiarTemp = () => {
    window.usuario.value = localStorage.user;
    window.token.value = localStorage.token;
};

export default {
    validarTemp,
    guardarTemp,
    copiarTemp,
};
