i = 1;
function tarefa(){
    var msg = document.getElementById("mensagem").value
    //console.log(msg)
    var linha = "<tr><td><input class='ml-3 form-check-input' type='checkbox' onclick='check(this, "+i+")'></td><td id=l"+i+">"+msg+"</td><th scope='row'>"+i+"</th></tr>";

    document.getElementById("tabela").innerHTML += linha
    i++;
}

function check(checado, l){
    document.getElementById("mensagem").value='';
    if(checado.checked){
        document.getElementById("l"+l).style.textDecoration = "line-through";
    }else{
        document.getElementById("l"+l).style.textDecoration = "";
    }
}
