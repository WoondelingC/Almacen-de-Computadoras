let boton = document.querySelector('#boton');
let cantidadComputadores = document.querySelector('#cantidad');

let valor = document.querySelector('#valor');
let descuento = document.querySelector('#descuento');
let total = document.querySelector('#total');

boton.addEventListener('click',function (){
    let cantidad = cantidadComputadores.value;
    let seccionCompra = document.querySelector("#compras")

    if(cantidad<=0){
        console.log("Estas colocando un valor menor a cero")
    
    }else{
        calcular(cantidad);
        seccionCompra.style.display="none"
        }

})

function calcular(cantidad){
    const valorComputadora = 820000;
    let compra= valorComputadora*cantidad;
    let descuentoCompra;

    if (compra >= 1640000 && compra <= 3280000){
        descuentoCompra= compra*0.15;
 
        valor.value = compra;
        descuento.value = descuentoCompra;
        total.value = valor.value-descuentoCompra;

    }else if(compra>3280000 && compra <=6560000){
        descuentoCompra=compra*0.25;

        valor.value = compra;
        descuento.value = descuentoCompra;
        total.value = valor.value-descuentoCompra;

        
    }else if(compra>6560000 && compra<=9840000){
        descuentoCompra=compra*0.35;

        valor.value = compra;
        descuento.value = descuentoCompra;
        total.value = valor.value-descuentoCompra;
    }else{
    valor.value = compra;
    total.value = valor.value;
    descuento.value= "no hay descuento para esta compra";
}

}