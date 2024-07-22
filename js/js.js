/* <div class="cards-container">
        <div class="card">
            <img src="image1.jpg" alt="Slika 1" class="card-img">
            <div class="card-content">
                <h3>Naslov 1</h3>
                <h3>Podnaslov 1</h3>
            </div>
        </div>
</div> */

const kartica = document.querySelector(".kartica");

const proizvodi = [
  {
    naziv: "Bulardi",
    cena: 329.99,
    dostupan: true,
    slika: "bulardi",
  },
  {
    naziv: "Amoksicilin",
    cena: 429.99,
    dostupan: true,
    slika: "amoxicilin",
  },
  {
    naziv: "Brufen",
    cena: 199.99,
    dostupan: true,
    slika: "brufen",
  },
  {
    naziv: "Bromazepam",
    cena: 559.99,
    dostupan: false,
    slika: "bromazepam",
  },
  {
    naziv: "Paracetamol",
    cena: 319.99,
    dostupan: true,
    slika: "paracetamol",
  },
  {
    naziv: "Olynth sprej",
    cena: 419.99,
    dostupan: true,
    slika: "olint",
  },
  {
    naziv: "Loperamid",
    cena: 221.99,
    dostupan: true,
    slika: "loperamid",
  },
  {
    naziv: "Rivotril",
    cena: 709.99,
    dostupan: false,
    slika: "rivo",
  },
  {
    naziv: "C vitamin",
    cena: 272.99,
    dostupan: true,
    slika: "c",
  },
  {
    naziv: "Strepsils",
    cena: 479.99,
    dostupan: true,
    slika: "strepsils",
  },
  {
    naziv: "Pressing",
    cena: 169.99,
    dostupan: true,
    slika: "presing",
  },
  {
    naziv: "Hidrogen",
    cena: 129.99,
    dostupan: true,
    slika: "hidrogen",
  },
];

/*
const cardContainer = document.getElementById("card-container");

proizvodi.forEach((proizvod) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = proizvod.slika;
  image.alt = proizvod.naziv;
  card.appendChild(image);

  const naziv = document.createElement("h3");
  naziv.textContent = proizvod.naziv;
  card.appendChild(naziv);

  const cena = document.createElement("p");
  cena.textContent = `Cena: ${proizvod.cena.toFixed(2)} RSD`;
  card.appendChild(cena);

  const dostupnost = document.createElement("p");
  dostupnost.textContent = proizvod.dostupan ? "Dostupan" : "Nije dostupan";
  if (!proizvod.dostupan) {
    dostupnost.className = "not-available";
  }
  card.appendChild(dostupnost);

  cardContainer.appendChild(card);
});

*/

const containerCards = document.querySelector("#kartice");

// const themeToggle = document.getElementById("themeToggle");

let currentPage = 1;
const itemsPerPage = 6;

function generisiKarticu(proizvod) {
  if (proizvod.dostupan) {
    proizvod.dostupan = "Dostupan";
  }
  if (proizvod.dostupan === false) {
    proizvod.dostupan = "Nije dostupan";
  }

  return `<div class="flex-container">
  <div class="item">
  <img src="slike/${proizvod.slika}.jpg" alt="Naslov slike">
  <h2 class="h2Kartica">${proizvod.naziv}</h2>
  <p class="pKartica">Cena: ${proizvod.cena}RSD</p>
  <p class="pKartica">${proizvod.dostupan}</p>
  </div>
  
  </div> `;
}

const karticeContainer = document.getElementById("kartice-container");

proizvodi.forEach((proizvod) => {
  karticeContainer.innerHTML += generisiKarticu(proizvod);
});

function prikaziKnjige() {
  const karticeContainer = document.getElementById("kartice-container");
  karticeContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const knjigeZaPrikaz = proizvodi.slice(startIndex, endIndex);

  knjigeZaPrikaz.forEach((proizvod) => {
    karticeContainer.innerHTML += generisiKarticu(proizvod);
  });
}

function updatePaginationButtons() {
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled =
    currentPage === Math.ceil(proizvodi.length / itemsPerPage);
}

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    prikaziKnjige();
    updatePaginationButtons();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage < Math.ceil(proizvodi.length / itemsPerPage)) {
    currentPage++;
    prikaziKnjige();
    updatePaginationButtons();
  }
});

// Initial display
prikaziKnjige();
updatePaginationButtons();
