import * as service from "./employee-service-mock";

service.findAll()
    .then(numbers => {
        let html = "";
        numbers.forEach(number => {
            html += `<div>
                        <div>
                            <p>${number.value}</p>
                        </div>
                    </div>`;
        });
        document.getElementById("list").innerHTML = html;
    })
    .catch(error => console.log(error));