var tarefa = 0;

function pegarTarefas(){
    fetch("http://www.professorisidro.com.br/tarefas.php", {"method":"GET"})
    .then(response => response.json())
    .then(json => criarTarefas(json));  
}

function criarTarefas(json){
    
    console.log(json)
    for(i = 0; i < json.length;i++){
        var tarefaDOM = document.createElement("div");
        tarefa++;
        tarefaDOM.setAttribute("id","t"+tarefa);
        tarefaDOM.setAttribute("draggable","true");
        tarefaDOM.setAttribute("class","tarefas mt-1 md-1");
        tarefaDOM.setAttribute("ondragstart","levaPrala(event);");
        tarefaDOM.innerHTML = json[i].nome;
        console.log(json[i].name)
        document.getElementById("ToDo").appendChild(tarefaDOM);
    }
}

function levaPrala(event){
    event.dataTransfer.setData("text", event.target.id);

}

function recebeu(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));


}

function permiteReceber(event){
    event.preventDefault();
}