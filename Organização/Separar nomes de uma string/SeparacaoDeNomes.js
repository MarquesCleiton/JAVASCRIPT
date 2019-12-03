var nome = prompt("Digite o seu nome")
var i = 0
var separa = []
var separa2 = []

//Modo Easy **********************************************
separa = nome.split(" ");
console.log(separa)
//********************************************************

// Modo Hard *********************************************
while(nome.indexOf(" ") >= 0){
    separa2[i] = nome.slice(0,nome.indexOf(" "));
    nome = nome.slice(nome.indexOf(" ") + 1);
    i++;
}
separa2[i]= nome
var texto = ""
for(i=0;i<separa2.length;i++){
    texto = texto + separa[i] + "\n"
}
alert(texto)
//**********************************************************

