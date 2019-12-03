
function calculaImposto() {
    var salario = document.getElementById("salario").value;
    var taxa = "";
    if (salario > 0) {
        if (salario > 5000) {
            taxa = 1300;
        }
        else if (salario > 2500) {
            taxa = salario * 0.25;
        } else if (salario > 1000) {
            taxa = salario * 0.125;
        } else {
            taxa = "ISENTO"
        }
        texto =         "Taxa           : " + taxa + "<br>";
        texto = texto + "Salário Liquido: " + salario + "<br>";
        texto = texto + "Salário Bruto  :" + (salario - taxa) + "<br>";

    } else {
        texto = "VALOR INVÁLIDO! <br> Coloque um valor positivo";
    }
    
    document.getElementById("exibeImposto").innerHTML = texto;
}

function exibir(){
    var texto = ""
}

