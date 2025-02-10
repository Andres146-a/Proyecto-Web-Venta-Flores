
function openModal(title, description, price) {
    let modal = document.getElementById("modal");
    let modalTitle = document.getElementById("modal-title");
    let modalDescription = document.getElementById("modal-description");
    let modalPrice = document.getElementById("modal-price");

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalPrice.textContent = "Precio: " + price;

    modal.style.display = "flex";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function (event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};


document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get("category");

    const categoryTitle = document.getElementById("category-title");
    categoryTitle.textContent = `Productos de la categoría: ${capitalize(categoria)}`;

    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Limpiar antes de cargar

    fetch(`http://localhost:5000/api/productos?categoria=${categoria}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                data.forEach(product => {
                    const productElement = document.createElement("div");
                    productElement.classList.add("product-box");
                    productElement.innerHTML = `
                        <img src="${product.imagen}" alt="${product.nombre}">
                        <h3>${product.nombre}</h3>
                        <button class="price-btn" onclick="openModal('${product.nombre}', '${product.precio}')">${product.precio} MXN</button>
                    `;
                    productContainer.appendChild(productElement);
                });
            } else {
                productContainer.innerHTML = "<p>No hay productos disponibles en esta categoría.</p>";
            }
        })
        .catch(error => console.error("Error cargando productos:", error));
});

// Función para abrir el modal con información del producto
function openModal(nombre, precio) {
    document.getElementById("modal-title").textContent = nombre;
    document.getElementById("modal-description").textContent = `Detalles de ${nombre}`;
    document.getElementById("modal-price").textContent = `Precio: ${precio} MXN`;
    document.getElementById("modal").style.display = "flex";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Función para capitalizar la primera letra de una palabra
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
