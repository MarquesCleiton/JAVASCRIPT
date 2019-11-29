i = 1;
function tarefa(){
    var msg = document.getElementById("mensagem").value
    console.log(msg)
    var linha = "<tr><td><input class='ml-3 form-check-input' type='checkbox'></td><td id=l"+i+">"+msg+"</td><th scope='row'>"+i+"</th></tr>";

    document.getElementById("tabela").innerHTML += linha
    
    /*
    document.title = document.getElementById("tarefa").value;
    var msg = document.createElement("H1");
    msg.innerHTML = document.getElementById("titulo").value;
    var divLixo = document.getElementById("lixo");
    divLixo.appendChild(msg);
    */
    i++;
}

function check(){

}
