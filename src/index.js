/*jslint browser:true */
'use strict';

function component() {
    var element = document.createElement("div");
    element.innerHTML = "Hello, webpack, travis, jslint and testing <br/> Hello from Docker";
    return element;
}

document.body.appendChild(component());

console.log("app started");