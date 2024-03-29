// karakids.js

// Verifica si el carrito ya existe en sessionStorage
var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Función para añadir un artículo al carrito
function addToCartKids() {
  var item = {
    name: "KaraKids - Kárate para Niños",
    price: 30, // Puedes ajustar el precio según tus necesidades
  };

  cart.push(item);

  // Almacena el carrito actualizado en sessionStorage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Muestra el carrito en un modal de Bootstrap
  showCartModal();
}
function addToCartKidsAdults() {
  var item = {
    name: "KaraKids - Kárate para Adultos",
    price: 45, // Puedes ajustar el precio según tus necesidades
  };

  cart.push(item);

  // Almacena el carrito actualizado en sessionStorage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Muestra el carrito en un modal de Bootstrap
  showCartModal();
}
function addToCartKidsAncians() {
  var item = {
    name: "KaraKids - Kárate para Ancianos",
    price: 27, // Puedes ajustar el precio según tus necesidades
  };

  cart.push(item);

  // Almacena el carrito actualizado en sessionStorage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Muestra el carrito en un modal de Bootstrap
  showCartModal();
}

// Función para obtener y mostrar el contenido del carrito
function viewCart() {
  // Muestra el carrito en un modal de Bootstrap
  showCartModal();
}

// Función para mostrar el carrito en un modal de Bootstrap
function showCartModal() {
  var modalContent = "";
  var totalPrice = 0; // Variable para almacenar la suma de los precios

  // Crea un nuevo elemento para cada artículo en el carrito
  cart.forEach(function (item, index) {
    //modalContent += `<p>${item.name} - ${item.price} € <button class="btn btn-danger" onclick="removeItemFromCart(${index})">Eliminar</button></p>`;
    modalContent += `<p>${item.name} - ${item.price} €`;
    totalPrice += item.price; // Suma el precio de cada artículo
  });

  modalContent += `<hr>`;
  modalContent += `<p>Total: ${totalPrice} €</p>`; // Agrega la suma total al contenido del modal

  // Muestra el modal de Bootstrap
  $("#cartModalContent").html(modalContent);

  // Configura el evento de clic para el botón "Pagar"
  $("#payButton").on("click", function () {
    // Redirige a la página "/pagar"
    window.location.href = "/pagar";
  });

  // Muestra el modal de Bootstrap
  $("#cartModal").modal("show");
}
