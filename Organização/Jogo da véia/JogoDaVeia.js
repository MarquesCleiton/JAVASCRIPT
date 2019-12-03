var jogador = 1

function jogada(casa) {
    if (document.getElementById(casa).innerHTML == "") {
        
        if (jogador == 1) {
            document.getElementById(casa).innerHTML = "x"
            vitoria("x")

        }
        else {
            document.getElementById(casa).innerHTML = "o"
            vitoria("o")
        }

        jogador++
        if (jogador > 2) {
            jogador = 1
        }
    }
}


function vitoria(jogada) {
    var c1 = document.getElementById('casa1').innerHTML;
    var c2 = document.getElementById('casa2').innerHTML
    var c3 = document.getElementById('casa3').innerHTML
    var c4 = document.getElementById('casa4').innerHTML
    var c5 = document.getElementById('casa5').innerHTML
    var c6 = document.getElementById('casa6').innerHTML
    var c7 = document.getElementById('casa7').innerHTML
    var c8 = document.getElementById('casa8').innerHTML
    var c9 = document.getElementById('casa9').innerHTML

    if (c1 == jogada && c2 == jogada && c3 == jogada) {
        alert("VITORIA " + jogada)
    } else if (c4 == jogada && c5 == jogada && c6 == jogada) {
        alert("VITORIA " + jogada)
    }
    else if (c7 == jogada && c8 == jogada && c9 == jogada) {
        alert("VITORIA " + jogada)

    } else if (c1 == jogada && c4 == jogada && c7 == jogada) {
        alert("VITORIA " + jogada)

    } else if (c2 == jogada && c5 == jogada && c8 == jogada) {
        alert("VITORIA " + jogada)

    } else if (c3 == jogada && c6 == jogada && c9 == jogada) {
        alert("VITORIA " + jogada)

    } else if (c1 == jogada && c5 == jogada && c9 == jogada) {
        alert("VITORIA " + jogada)

    } else if (c3 == jogada && c5 == jogada && c7 == jogada) {
        alert("VITORIA " + jogada)

    }
}