// Variables y constantes
const productos = ["Camiseta", "Pantalón", "Zapatillas"];
const precios = [5000, 8000, 12000];
let carrito = [];

// Función 1: mostrar productos disponibles
function mostrarProductos() {
  let lista = "Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    lista += `${i + 1}. ${productos[i]} - $${precios[i]}\n`;
  }
  alert(lista); // ahora se muestra al inicio en un cuadro de diálogo
  console.log(lista); // también en la consola
}

// Función 2: agregar producto al carrito
function agregarProducto() {
  let opcion = parseInt(prompt("Ingrese el número del producto que desea comprar:"));
  if (opcion >= 1 && opcion <= productos.length) {
    carrito.push(precios[opcion - 1]);
    alert(`Agregaste ${productos[opcion - 1]} al carrito.`);
  } else {
    alert("Opción inválida. Intente nuevamente.");
  }
}

// Función 3: calcular total de la compra
function calcularTotal() {
  let total = 0;
  for (let precio of carrito) {
    total += precio;
  }
  return total;
}

// Flujo principal del simulador
function iniciarSimulador() {
  alert("Bienvenido al simulador de compras.");
  mostrarProductos(); // se muestran las opciones al inicio
  let continuar = true;

  while (continuar) {
    agregarProducto();
    continuar = confirm("¿Desea agregar otro producto?");
  }

  let totalCompra = calcularTotal();
  alert(`El total de su compra es: $${totalCompra}`);
  console.log("Carrito final:", carrito);
}

// Invocar simulador
iniciarSimulador();
