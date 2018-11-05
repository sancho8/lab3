/*jslint browser:true */
'use strict';

function component() {
    var element = document.createElement("div");
    element.innerHTML = "Hello, webpack, travis, jslint and testing";
    return element;
}

document.body.appendChild(component());