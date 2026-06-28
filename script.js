// Variables del DOM 
let txtProducto = document.querySelector("#text-producto");
let cbbCategoria = document.querySelector("#combo-box-categoria")
let numPrecio = document.querySelector("#number-precio")
let btnGuardar = document.querySelector("#button-guardar")
let lsPadre = document.querySelector("#lista-padre")

// Variable Array
let listaProducto = []

// Variable localStorage
let listaVieja = localStorage.getItem("producto")

if(listaVieja !== null){
    listaProducto = JSON.parse(listaVieja)
    listarProductoExistente()
}


function crearButtonRemove(lista,producto){
    let btnRemove = document.createElement("button")
    btnRemove.className = "button-remove"
    btnRemove.textContent = "X"
    btnRemove.addEventListener("click",()=>{
        let listaFilter = listaProducto.filter(listaProducto => listaProducto.producto !== producto)
        localStorage.setItem("producto",JSON.stringify(listaFilter))
        lista.remove()
    })
    lista.appendChild(btnRemove)
}

function crearProducto(producto,categoria,precio){
    let newProducto = {
        "producto":producto,
        "categoria":categoria,
        "precio":precio
    }
    crearLista(producto,categoria,precio)
    listaProducto.push(newProducto)
    localStorage.setItem("producto",JSON.stringify(listaProducto))
}

function crearLista(producto,categoria,precio){
    // Crear la lista hijo
    let newLista = document.createElement("li")
    newLista.className = "lista-hijo"

    // Datos de la lista
    let dataProducto = document.createElement("p")
    dataProducto.textContent = producto

    let dataCategoria = document.createElement("p")
    dataCategoria.textContent = categoria

    let dataPrecio = document.createElement("p")
    dataPrecio.textContent = `Q ${precio}`

    // Agregar los datos a la lista hijo
    newLista.appendChild(dataProducto)
    newLista.appendChild(dataCategoria)
    newLista.appendChild(dataPrecio)

    // Agregar la funcion de crear el boton para eliminar la lista
    crearButtonRemove(newLista,producto)

    // Agregar la lista hijo a la lista padre
    lsPadre.appendChild(newLista)
}

function listarProductoExistente(){
    listaProducto.forEach((Element)=>{
        crearLista(Element.producto,Element.categoria,Element.precio)
    })
}

btnGuardar.addEventListener("click",()=>{
    if(txtProducto.value.trim() === ""){
        return alert("Esribe un producto")
    }
    if(numPrecio.value.trim() == ""){
        return alert("Debes de especificar el precio")
    }
    else{
        alert("Se ha guardado correctamente")
        crearProducto(txtProducto.value,cbbCategoria.value,numPrecio.value)
        console.log(listaProducto)
        txtProducto.value = ""
        numPrecio.value = 0
    }
})