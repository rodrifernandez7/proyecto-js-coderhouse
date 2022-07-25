let stock = [
    { 
        id: 1, 
        nombre: 'Nike AF1 White',
        marca: 'Nike',
        color: 'blanco',
        precio: 14000,
        categoria: 'zapatillas',
        cantidadDisp: 5
    },
    {
        id: 2, 
        nombre: 'Nike AF1 Black',
        marca: 'Nike',
        color: 'negro',
        precio: 14000,
        categoria: 'zapatillas',
        cantidadDisp: 4
    },
    {
        id: 3, 
        nombre: 'Nike Dunk Panda',
        marca: 'Nike',
        color: 'blanco',
        precio: 50000,
        categoria: 'zapatillas',
        cantidadDisp: 2
    },
    {
        id: 4, 
        nombre: 'Adidas Yeezy',
        marca: 'Adidas',
        color: 'gris',
        precio: 45000,
        categoria: 'zapatillas',
        cantidadDisp: 3
    },
    {
        id: 5, 
        nombre: 'Adidas Forum Low',
        marca: 'Adidas',
        color: 'Azul',
        precio: 32000,
        categoria: 'zapatillas',
        cantidadDisp: 6
    }
]

let producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número correspondiente:\n 1- Nike AF1 White\n 2- Nike AF1 Black\n 3- Nike Dunk Panda\n 4- Adidas Yeezy\n 5- Adidas Forum Low'));

let encontrado;

total = 0;

while(producto != NaN){
    switch(producto) {
        case 1:
            procesoDeCompra();
            break;

        case 2:
            procesoDeCompra();
            break;

        case 3:
            procesoDeCompra();
            break;

        case 4:
            procesoDeCompra();
            break;

        case 5:
            procesoDeCompra();
            break;

        default:
            alert('Ingresá un número válido.');
            producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número correspondiente:\n 1- Nike AF1 White\n 2- Nike AF1 Black\n 3- Nike Dunk Panda\n 4- Adidas Yeezy\n 5- Adidas Forum Low'));
    }
}

function procesoDeCompra(){
    encontrado = stock.find((elemento) => elemento.id == producto);

    let cantidad = parseInt(prompt('El precio de ' + encontrado.nombre + ' en color ' + encontrado.color + ' es de ' + encontrado.precio + '. ¿Cuántas unidades querés?'));

    if(cantidad <= encontrado.cantidadDisp){
        total = encontrado.precio * cantidad;
        alert(' El precio total sin IVA es de $' + total);
        continuarCompra();
    } else  {
        alert('Ingresá un número válido. Solamente tenemos en stock ' + encontrado.cantidadDisp + ' unidades de este producto.')
        producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número correspondiente:\n 1- Nike AF1 White\n 2- Nike AF1 Black\n 3- Nike Dunk Panda\n 4- Adidas Yeezy\n 5- Adidas Forum Low'));
    }
}

function continuarCompra(){
    let continuar = prompt('¿Desea continuar con la compra? Responda ¨Si¨ o ¨No¨');

    if (continuar == 'si' || continuar == 'Si' || continuar == 'SI') {

        sumarIva()

    } else {
        alert('Su sesion ha finalizado');
    }

    producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número correspondiente:\n 1- Nike AF1 White\n 2- Nike AF1 Black\n 3- Nike Dunk Panda\n 4- Adidas Yeezy\n 5- Adidas Forum Low'));
}

function sumarIva(){
    let finalizar = prompt(' El precio total incluído IVA es de ' + '$' + (total * 1.105) + '\n Desea confirmar la compra? Responda "Si" o "No"');
    if (finalizar == 'si' || finalizar == 'Si' || finalizar == 'SI') {
        alert('Muchas gracias por su compra.')
    } else {
        alert('Su sesion ha finalizado.')
    }
}