// Array de objetos producto
const productos = [
  { nombre: "Camiseta", precio: 5000 },
  { nombre: "Pantalón", precio: 8000 },
  { nombre: "Zapatillas", precio: 12000 }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función 1: mostrar productos en el DOM
function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  lista.forEach((producto, index) => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <input type="number" id="cantidad-${index}" min="1" value="1">
      <button onclick="agregarProducto(${index})">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

// Función 2: agregar producto al carrito con cantidad
function agregarProducto(indice) {
  const cantidad = parseInt(document.getElementById(`cantidad-${indice}`).value);
  if (cantidad > 0) {
    for (let i = 0; i < cantidad; i++) {
      carrito.push(productos[indice]);
    }
    actualizarCarrito();
  }
}

// Función 3: mostrar carrito en el DOM
function actualizarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";
  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    lista.appendChild(li);
  });

  const total = calcularTotal(carrito);
  document.getElementById("total").textContent = total;

  // Guardar en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función 4: calcular total
function calcularTotal(listaCarrito) {
  return listaCarrito.reduce((acc, producto) => acc + producto.precio, 0);
}

// Función 5: vaciar carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
  localStorage.removeItem("carrito");
}

// Eventos
document.getElementById("vaciar").addEventListener("click", vaciarCarrito);

// Inicialización
mostrarProductos(productos);
actualizarCarrito();
