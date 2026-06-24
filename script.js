// Variables del DOM
let textBox = document.querySelector("#text-box")
const btnSave = document.querySelector("#button-save")
let lsDinamica = document.querySelector("#lista-dinamica")

// Variable Array
let miArray = ["Esteban","Mauro","Antonio"]

// Funcion para crear un boton para eiminar una lista o algo así
function botonEliminar(lista,valor){
    let btnRemove = document.createElement("button")
    btnRemove.textContent = "X"
    btnRemove.className = "button-remove"
    lista.appendChild(btnRemove)
    btnRemove.addEventListener("click",()=>{
        let pos = miArray.indexOf(valor)
        miArray.splice(pos)
        lista.remove()
    })
}

// Funcion para lista mi Array
function leerArray(){
    for(let i=0;i<miArray.length;i++){
        let newLista = document.createElement("li")
        newLista.textContent = miArray[i]
        newLista.className = "lista-hijo"
        lsDinamica.appendChild(newLista)
        botonEliminar(newLista,miArray[i])
    }
}

leerArray()

// Funciion para crear un nuevo Elemento
function crearElemento(valor){
    let newLista = document.createElement("li")
    newLista.textContent = valor
    newLista.className = "lista-hijo"
    lsDinamica.appendChild(newLista)
    miArray.push(valor)
    botonEliminar(newLista)
}

// Evento click
btnSave.addEventListener("click",()=>{
    if(textBox.value.trim() === ""){
        alert("¡Escribe algo joder!")
    }else{
        if(miArray.includes(textBox.value.trim())){
            alert("El nombre ya existe")
        }else{
            alert("Se ha guardado correctamente")
            crearElemento(textBox.value.trim())
            textBox.value = ""
        }
    }
})