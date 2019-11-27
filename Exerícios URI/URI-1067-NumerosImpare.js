num = 0;
var htmlgerado = "";
var l1 = 0
do {
    num = prompt("Digite um número");
} while (num < 1);


for (i = 1; i <= num; i++) {



    if (i % 2 != 0) {
        l1++
        
        htmlgerado += "<div class='row";
        if (l1==1) {
            htmlgerado += "<div class='row cor1'";
        }else if (l1==2) {
            htmlgerado += " cor2'";
        }else if (l1==3){
            htmlgerado += " cor3'";
        }

        htmlgerado += ">"
        htmlgerado += "<div class='col-sm-4'>" + i + "</div>";
        htmlgerado += "</div>";
        
        if(l1==3){
            l1=0
        }
    }


}
document.getElementById("impares").innerHTML = htmlgerado;