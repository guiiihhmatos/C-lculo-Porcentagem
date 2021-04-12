function calcular() {
    var numero = document.getElementById('txtnumero')
    var porce = document.getElementById('txtporce')
    var res = document.getElementById('res')
    var n1 = Number(numero.value)
    var n2 = Number(porce.value)
    var n3 = n1 * n2 / 100

    if (n2 > 100) {
        window.alert('O número maxímo de % é 100')
    } else {
        res.innerHTML = `${n2}% de ${n1} é = <strong>${n3}</strong> \u{1F44F}` 
    }
    

}