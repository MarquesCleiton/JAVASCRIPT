var video=1;
var pause = 0;
function tocaAnterior(){
    video--;
    if(video<1){
        video=3;
    }
    caminho = "videos/video"+video+".mp4"
    document.getElementById("myvideo").src = caminho;
    document.getElementById("myvideo").play();
}
function tocaAtual(){
    console.log("musica atual = "+document.getElementById("myvideo").src);
    
    caminho = "videos/video"+video+".mp4"
        document.getElementById("myvideo").src = caminho;
        document.getElementById("myvideo").currentTime = pause;
        document.getElementById("myvideo").play();
}
function paraTudo(){
    pause = document.getElementById("myvideo").currentTime;
    document.getElementById("myvideo").pause();

}
function tocaProxima(){
    video++;
    if(video>3){
        video=1;
    }
    caminho = "videos/video"+video+".mp4"
    document.getElementById("myvideo").src = caminho;
    document.getElementById("myvideo").play();

}