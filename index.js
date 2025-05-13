const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 9700,
    ingredientes: ["muzzarella", "tomate", "aceitunas"],
    imagen: "./img/muzzarella.png",
  },
  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 10800,
    ingredientes: ["muzzarella", "tomate", "cebolla"],
    imagen: "./img/cebolla.png",
  },
  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 12100,
    ingredientes: [
      "muzzarella",
      "tomate",
      "queso azul",
      "parmesano",
      "roquefort",
    ],
    imagen: "./img/4quesos.png",
  },
  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1200,
    ingredientes: ["muzzarella", "tomate", "aceitunas", "anchoas", "cebolla"],
    imagen: "./img/especial.png",
  },
  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 12400,
    ingredientes: ["muzzarella", "tomate", "anana"],
    imagen: "./img/anana.png",
  },
];

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const cardContainer = document.getElementById("card-container");

const searchPizza = () => {
  const pizzaId = parseInt(searchInput.value);
  const pizza = pizzas.find((pizza) => pizza.id === pizzaId);

  if (!pizzaId) {
    localStorage.removeItem("ultimaPizza");

    return (cardContainer.innerHTML = `
    <div class="error-container">
    <p>⚠️ Por favor ingresá un número para buscar tu pizza</p>
    </div>
    `);
  }

  if (pizza) {
    localStorage.setItem("ultimaPizza", JSON.stringify(pizza));

    cardContainer.innerHTML = `
  <div>
        <h2>${pizza.nombre}</h2>
        <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
        <img src="${pizza.imagen}" alt="${pizza.nombre}" />
        <p>Precio: $${pizza.precio}</p>
    </div>
  `;
  } else {
    localStorage.removeItem("ultimaPizza");

    cardContainer.innerHTML = `
    <div class="error-container">
        <p> ❌La pizza que estás buscando no existe</p>
    </div>
    `;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const pizzaGuardada = localStorage.getItem("ultimaPizza");

  if (pizzaGuardada) {
    const pizza = JSON.parse(pizzaGuardada);

    cardContainer.innerHTML = `
    <div>
        <h2>${pizza.nombre}</h2>
        <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
        <img src="${pizza.imagen}" alt="${pizza.nombre}" />
        <p>Precio: $${pizza.precio}</p>
    </div>
  `;
  }
});
