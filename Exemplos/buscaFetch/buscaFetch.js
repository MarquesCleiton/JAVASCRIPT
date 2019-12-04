function buscarApenasUma(){
    fetch("http://www.professorisidro.com.br/tarefas.php?debug=true", {"method":"GET"})
       .then(response => response.json())
       .then(json => exibeUmaUnica(json));
}
function exibeUmaUnica(json){
    document.getElementById("resultado").innerHTML = "Nome da Tarefa = <strong>"+json.nome+"</strong><br/>";
    document.getElementById("resultado").innerHTML += "Responsavel ="+json.responsavel;
}

function buscarTudao(){
    fetch("http://www.professorisidro.com.br/tarefas.php",{"method":"GET"})
      .then(response => response.json())
      .then(json => exibeTudao(json));
}
function exibeTudao(json){
   // console.log("Recebi "+JSON.stringify(json));
    console.log("Quantidade de tarefas = "+json.length);
    var tarefaAtual;
    for (i=0; i<json.length; i++){
        tarefaAtual = json[i];  // atribuo na variavel "tarefaAtual" o objeto a cada nova posicao
        console.log("Nome da Tarefa = "+tarefaAtual.nome);
        document.getElementById("resultado").innerHTML +="Nome da Tarefa = "+ tarefaAtual.nome + " ("+tarefaAtual.responsavel+")<br/>";
    }


}