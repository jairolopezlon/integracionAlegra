/*jshint esversion: 8*/
import accionBtn from './accionBtn.js';

export default function capturarBoton() {
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', (event) => {
            const btnName = event.target.name;
            try {
                accionBtn[btnName]();
                event.preventDefault();
            } catch (error) {
                console.log(`boton "${btnName}" no configurado:`, error);
                event.preventDefault();
            }
        });
    });
}
