/*jshint esversion: 8*/
function create_element(type_tag, id_tag = '', class_name = '') {
    var new_element = document.createElement(type_tag);
    new_element.id = id_tag;
    new_element.className = class_name;
    return new_element;
}
function insert_element(element_to_insert, before_element_id) {
    document
        .getElementById(before_element_id)
        .insertAdjacentHTML('afterend', element_to_insert.outerHTML);
}
function remove_element(id_element) {
    var element_to_remove = document.getElementById(id_element);
    if (!element_to_remove) {
        console.log(`elemento a remover con id ${id_element} no existe`);
    } else {
        element_to_remove.parentElement.removeChild(element_to_remove);
    }
}
function copiarInfo(idTabla) {
    let temp_textarea = create_element('textarea', 'temp_textarea');
    insert_element(temp_textarea, idTabla);
    var table_info = document.getElementById(idTabla).innerText;
    var input_data = document.getElementById('temp_textarea');
    input_data.value = table_info;
    input_data.select();
    document.execCommand('copy');
    remove_element('temp_textarea');
    const msgAlert = window.msgAlert;
    msgAlert.textContent =
        'Informacion copiada, puede usar "Control + V" para pegar en Excel';
}

export default {
    copiarInfo: copiarInfo,
};
