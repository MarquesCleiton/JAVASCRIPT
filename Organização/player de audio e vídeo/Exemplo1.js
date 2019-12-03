var numMusica=0;

function tocaAnterior(){

}
function tocaAtual(){
    console.log("musica atual = "+document.getElementById("mymusic").src);

        document.getElementById("mymusic").src = "./Musica"+numMusica+".mp3";
        document.getElementById("mymusic").play();
    console.log("ah... chato!");
}
function paraTudo(){
    document.getElementById("mymusic").pause();

}
function tocaProxima(){

}