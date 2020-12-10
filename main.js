// Inputs
var respuestaNombre = document.getElementById("name")
var respuestaTelefono = document.getElementById("tel")
var respuestaPizza = document.getElementById("pizza")
var respuestaDireccion = document.getElementById("dir")
// Respuesta pedido
var pedidoNombre = document.getElementById("pedidoNombre")
var pedidoTel = document.getElementById("pedidoTel")
var pedidoDir = document.getElementById("pedidoDir")
// Boton
var boton = document.getElementById("orden")
// Card
var pedidoContainer = document.getElementById("pedido")
// Img
var pedidoPizza = document.getElementById("pedidoPizza")
// Body
var bodyHtml = document.getElementById("body")

function ordenar () {
    var dataNombre = respuestaNombre.value
    var dataTelefono = respuestaTelefono.value
    var dataPizza = respuestaPizza.value.toLowerCase()
    var dataDireccion = respuestaDireccion.value

    pedidoNombre.innerHTML = dataNombre;
    pedidoTel.innerHTML = dataTelefono
    pedidoDir.innerHTML = dataDireccion

    if (dataPizza === "si"){
        pedidoPizza.src = 'https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2020/03/pizza-hawaiana.jpg?width=1200&enable=upscale'
        pedidoContainer.classList.remove("d-none")
        bodyHtml.classList.add("bg-new")
    } else if (dataPizza === "no"){
        pedidoPizza.src = 'https://cherry-brightspot.s3.amazonaws.com/51/08/10c47b0b409bad80f95af63acda3/pizzza.jpg'
        pedidoContainer.classList.remove("d-none")
        bodyHtml.classList.remove("bg-new")
    } else {
        pedidoPizza.src = 'https://miguelarino.files.wordpress.com/2012/11/peligro.jpg'
        pedidoContainer.classList.remove("d-none")
    }


}