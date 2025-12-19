var btn_calcular = document.getElementById("btn_calcular");
var total = document.getElementById("total");

var productos = [
    {nombre: "Cuaderno", precio: 2.00, categoria: "Utiles" },
    {nombre: "Lapiz", precio: 0.25, categoria: "Utiles" },
    {nombre: "Mochila", precio: 15.00, categoria: "Accesorios" },

    {nombre: "Mochila", precio: 15.00, categoria: "Accesorios" }
];

function mostrarProductos() {
    var tablaProductos = document.getElementById("tabla-productos");
    productos.forEach(producto => {
        var fila = document.createElement("tr");
        fila.innerHTML = `
                    <td>${producto.nombre}</td>
                    <td>${producto.precio.toFixed(2)}</td>
                    <td>${producto.categoria}</td>
                `;
        tablaProductos.appendChild(fila);
    });
}

btn_calcular.addEventListener("click", function(event){
    let precio_total = 0; 
    for (let i = 0; i < productos.length; i++) {
        precio_total += productos[i].precio; 
    }
    total.innerText = `Total a pagar: $${precio_total.toFixed(2)}`;
})

mostrarProductos();
