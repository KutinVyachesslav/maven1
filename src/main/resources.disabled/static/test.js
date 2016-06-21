var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/customers', false);
xhr.send();
if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
}
else {
    resp = JSON.parse(xhr.responseText);
    var div = document.createElement("div");

    for (var i = 0; i < resp._embedded.customer.length; i++) {
        var fn = resp._embedded.customer[i].firstName;
        var ln = resp._embedded.customer[i].lastName;
        var li = document.createElement("li");
        var txt = document.createTextNode(fn + " " + ln);
        links.appendChild(txt);
        div.appendChild(li);
    }
    document.getElementById("microtest").appendChild(div);
}
