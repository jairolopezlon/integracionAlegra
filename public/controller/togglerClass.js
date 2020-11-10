/*jshint esversion: 8*/

export default {
    togglerClass: (elementName, className) => {
        try {
            const elementTarget = document.getElementsByName(elementName)[0];
            elementTarget.classList.toggle(className);
        } catch (error) {
            console.log(err);
        }
    },
};
