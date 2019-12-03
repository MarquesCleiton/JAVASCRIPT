function realizarBusca() {

    var id = document.getElementById("num_id").value;
    console.log("ID digitado = " + id);

    // vou montar uma URL com o padrao do REPUBLICAVIRTUAL
    var URL = "https://jsonplaceholder.typicode.com/users/" + id;
    console.log("Montei a URL...");
    console.log(URL);

    // agora... quero buscar os detalhes do CEP
    fetch(URL, { method: "GET" })
        .then(response => response.json())
        .then(json => preencheHTML(json));

}


function preencheHTML(json) {
    console.log(json.id)
    document.getElementById("id").value = json.id
    document.getElementById("nome").value = json.name
    document.getElementById("usuario").value = json.username
    document.getElementById("email").value = json.email
    document.getElementById("telefone").value = json.phone
    document.getElementById("website").value = json.website
    document.getElementById("rua").value = json.address.street
    document.getElementById("complemento").value = json.address.suite
    document.getElementById("cidade").value = json.address.city
    document.getElementById("cep").value = json.address.zipcode
    document.getElementById("enome").value = json.company.name
    document.getElementById("frase").value = json.company.catchPhrase
    document.getElementById("bs").value = json.company.bs

    //var result = document.getElementById("result");
    //result.innerHTML = JSON.stringify(json);
    /*result.innerHTML += json.tipo_logradouro + "<br/>";
    result.innerHTML += json.logradouro + "<br/>";
    result.innerHTML += "Cidade: "+json.cidade+" -  Bairro: "+json.bairro+"<br/>";
    result.innerHTML += "UF: "+json.uf+"<br/>";*/

}