/*jshint esversion: 8*/

export default {
    set: (user, token) => {
        localStorage.user = user;
        localStorage.token = token;
    },

    getUser: () => {
        if (localStorage.user) {
            return localStorage.user;
        } else if (window.usuario.value !== '') {
            return window.usuario.value;
        } else {
            return '';
        }
    },

    getToken: () => {
        if (localStorage.token) {
            return localStorage.token;
        } else if (window.usuario.value !== '') {
            return window.usuario.value;
        } else {
            return '';
        }
    },

    validacion: () => {
        if (getToken() === '' || getUser() === '') {
            return false;
        } else {
            return true;
        }
    },
};
