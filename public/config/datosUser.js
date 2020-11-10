/*jshint esversion: 8*/
let token = '';
let user = '';

if (window.token && window.user) {
    token = window.token;
    user = window.user;
} else {
    alert('Por favor ingresar usuario y/o token');
}

export default {
    token: token,
    usuario: user,
};
