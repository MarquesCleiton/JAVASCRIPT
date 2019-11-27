var salMin = prompt("Digite o valor do salário minimo")

var qtdKw = salMin = prompt("a quantidade de Kw")

kw = salMin/700
valorTotal = kw * qtdKw
porcDesconto = 0.9
valorDesco = valorTotal*porcDesconto

document.write("valor de 1 kw: R$: " + kw + "<br>")
document.write("valor Gasto R$: " + valorTotal + "<br>")
document.write("valor Gasto com desconto R$: " + valorDesco + "<br>")

console.log("valor de 1 kw: R$: " + kw)
console.log("valor Gasto R$: " + valorTotal)
console.log("valor Gasto com desconto R$: " + valorDesco)

alert("valor de 1 kw: R$: " + kw)
alert("valor Gasto R$: " + valorTotal)
alert("valor Gasto com desconto R$: " + valorDesco)