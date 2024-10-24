//variables para los selectores

const formulario = document.getElementById('agregar-gasto');
const listadog = document.getElementById('#gastos ul');

//creacion de  eventos
eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded',preguntarpresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}




//crear la clase principal
class Presupuesto
{
    constructor(presupuesto)
    {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    
    }

    nuevoGasto (gastos){
        this.gastos = []
        this.calcularRestante();
    }

}
//clase que maneja la interfaz de usuario
class UI
{
    insertarpresupuesto(cantidad){
        document.querySelector('#total').textContent = cantidad.presupuesto;
        document.querySelector('#restante').textContent  = cantidad.restante;

    }
    imprimirAlerta(){

        //crear el div
        const divmensaje = document.createElement('div')
        divmensaje.classList('text-center','alert');

    }
}
//insertar el gasto en la lista
agregarGastolistado(gastos)

//crear un objeto de la clase ui
const ui = new UI();
let presupuesto;


function preguntarpresupuesto(){
    const valorpre  = prompt('ingrese un presupuesto');

    //validar lo  ingresado por el usuario
    if (valorpre === '' || isNaN(valorpre) || valorpre === null || valorpre <= 0) 
        {

            window.location.reload();
    
        }
        //presupuesto es valido
        presupuesto  = new Presupuesto(valorpre);

    console.log(valorpre);
    //mostrar en el html el valor del presupuesto ingresado
    ui.insertarpresupuesto(presupuesto);
}

function agregarGasto (){
    eventListener.preventDefault()
    
    //definir las variables del formulario 
    const nombre = document.querySelector('#').value;
    const valor = Number(document.querySelector('#').value);

    //validar los campos el formulario
    if (nombre == '' || valor == ''){

        ui.imprimirAlerta('Ambos campos son obligatorios'), 'error';
        //return;
    }else if(valor < 8 || isNaN(valor)){
        ui.imprimirAlerta('El valor no es correcto',error);
    }

}