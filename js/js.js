// JavaScript za poboljšani sajt

// Podaci o proizvodima
const proizvodi = [
  {
    naziv: "Bulardi",
    cena: 329.99,
    dostupan: true,
    slika: "bulardi",
    kategorija: "lek"
  },
  {
    naziv: "Amoksicilin",
    cena: 429.99,
    dostupan: true,
    slika: "amoxicilin",
    kategorija: "lek"
  },
  {
    naziv: "Brufen",
    cena: 199.99,
    dostupan: true,
    slika: "brufen",
    kategorija: "lek"
  },
  {
    naziv: "Bromazepam",
    cena: 559.99,
    dostupan: false,
    slika: "bromazepam",
    kategorija: "lek"
  },
  {
    naziv: "Paracetamol",
    cena: 319.99,
    dostupan: true,
    slika: "paracetamol",
    kategorija: "lek"
  },
  {
    naziv: "Olynth sprej",
    cena: 419.99,
    dostupan: true,
    slika: "olint",
    kategorija: "lek"
  },
  {
    naziv: "Loperamid",
    cena: 221.99,
    dostupan: true,
    slika: "loperamid",
    kategorija: "lek"
  },
  {
    naziv: "Rivotril",
    cena: 709.99,
    dostupan: false,
    slika: "rivo",
    kategorija: "lek"
  },
  {
    naziv: "C vitamin",
    cena: 272.99,
    dostupan: true,
    slika: "c",
    kategorija: "suplement"
  },
  {
    naziv: "Strepsils",
    cena: 479.99,
    dostupan: true,
    slika: "strepsils",
    kategorija: "lek"
  },
  {
    naziv: "Pressing",
    cena: 169.99,
    dostupan: true,
    slika: "presing",
    kategorija: "lek"
  },
  {
    naziv: "Hidrogen",
    cena: 129.99,
    dostupan: true,
    slika: "hidrogen",
    kategorija: "kozmetika"
  },
  {
    naziv: "Omega 3",
    cena: 899.99,
    dostupan: true,
    slika: "omega3",
    kategorija: "suplement"
  },
  {
    naziv: "Krema za sunčanje",
    cena: 649.99,
    dostupan: true,
    slika: "suncana_krema",
    kategorija: "kozmetika"
  },
  {
    naziv: "Vitamin D",
    cena: 389.99,
    dostupan: true,
    slika: "vitamin_d",
    kategorija: "suplement"
  },
  // DODATNI LEKOVI
  {
    naziv: "Aspirin",
    cena: 189.99,
    dostupan: false,
    slika: "aspirin",
    kategorija: "lek"
  },
  {
    naziv: "Ibuprofen",
    cena: 239.99,
    dostupan: true,
    slika: "ibuprofen",
    kategorija: "lek"
  },
  {
    naziv: "Loratadin",
    cena: 299.99,
    dostupan: true,
    slika: "loratadin",
    kategorija: "lek"
  },
  {
    naziv: "Omeprazol",
    cena: 389.99,
    dostupan: false,
    slika: "omeprazol",
    kategorija: "lek"
  },
  {
    naziv: "Metformin",
    cena: 459.99,
    dostupan: true,
    slika: "metformin",
    kategorija: "lek"
  },
  {
    naziv: "Atorvastatin",
    cena: 679.99,
    dostupan: true,
    slika: "atorvastatin",
    kategorija: "lek"
  },
  {
    naziv: "Losartan",
    cena: 519.99,
    dostupan: false,
    slika: "losartan",
    kategorija: "lek"
  },
  {
    naziv: "Sertralin",
    cena: 789.99,
    dostupan: true,
    slika: "sertralin",
    kategorija: "lek"
  },
  {
    naziv: "Diazepam",
    cena: 629.99,
    dostupan: false,
    slika: "diazepam",
    kategorija: "lek"
  },
  {
    naziv: "Levotiroksin",
    cena: 349.99,
    dostupan: true,
    slika: "levotiroksin",
    kategorija: "lek"
  },
  {
    naziv: "Warfarin",
    cena: 289.99,
    dostupan: true,
    slika: "warfarin",
    kategorija: "lek"
  },
  {
    naziv: "Gluformin",
    cena: 1299.99,
    dostupan: false,
    slika: "gluformin",
    kategorija: "lek"
  },
  {
    naziv: "Salbutamol",
    cena: 419.99,
    dostupan: true,
    slika: "salbutamol",
    kategorija: "lek"
  },
  {
    naziv: "Prednizon",
    cena: 329.99,
    dostupan: true,
    slika: "prednizon",
    kategorija: "lek"
  },
  {
    naziv: "Ciprofloksacin",
    cena: 489.99,
    dostupan: false,
    slika: "ciprofloksacin",
    kategorija: "lek"
  },
  {
    naziv: "Metronidazol",
    cena: 279.99,
    dostupan: true,
    slika: "metronidazol",
    kategorija: "lek"
  },
  {
    naziv: "Ranitidin",
    cena: 199.99,
    dostupan: false,
    slika: "ranitidin",
    kategorija: "lek"
  },
  {
    naziv: "Fluoksetin",
    cena: 459.99,
    dostupan: true,
    slika: "fluoksetin",
    kategorija: "lek"
  },
  {
    naziv: "Digoksin",
    cena: 319.99,
    dostupan: false,
    slika: "digoksin",
    kategorija: "lek"
  },
  {
    naziv: "Furosemid",
    cena: 189.99,
    dostupan: true,
    slika: "furosemid",
    kategorija: "lek"
  },
  {
    naziv: "Karbamazepin",
    cena: 569.99,
    dostupan: false,
    slika: "karbamazepin",
    kategorija: "lek"
  },
  {
    naziv: "Valproat",
    cena: 619.99,
    dostupan: true,
    slika: "valproat",
    kategorija: "lek"
  },
  {
    naziv: "Klopidogrel",
    cena: 729.99,
    dostupan: true,
    slika: "klopidogrel",
    kategorija: "lek"
  },
  {
    naziv: "Simvastatin",
    cena: 399.99,
    dostupan: false,
    slika: "simvastatin",
    kategorija: "lek"
  },
  {
    naziv: "Montelukast",
    cena: 489.99,
    dostupan: true,
    slika: "montelukast",
    kategorija: "lek"
  },
  {
    naziv: "Tamsulozin",
    cena: 559.99,
    dostupan: true,
    slika: "tamsulozin",
    kategorija: "lek"
  },
  {
    naziv: "Finasterid",
    cena: 679.99,
    dostupan: false,
    slika: "finasterid",
    kategorija: "lek"
  },
  {
    naziv: "Alprazolam",
    cena: 589.99,
    dostupan: true,
    slika: "alprazolam",
    kategorija: "lek"
  },
  {
    naziv: "Zolpidem",
    cena: 739.99,
    dostupan: false,
    slika: "zolpidem",
    kategorija: "lek"
  },
  {
    naziv: "Tramadol",
    cena: 429.99,
    dostupan: true,
    slika: "tramadol",
    kategorija: "lek"
  },
  {
    naziv: "Morfijum",
    cena: 899.99,
    dostupan: false,
    slika: "morfijum",
    kategorija: "lek"
  },
  {
    naziv: "Kodein",
    cena: 369.99,
    dostupan: true,
    slika: "kodein",
    kategorija: "lek"
  },
  {
    naziv: "Oksikodon",
    cena: 789.99,
    dostupan: false,
    slika: "oksikodon",
    kategorija: "lek"
  }
];

// Globalne varijable
let currentPage = 1;
const itemsPerPage = 8;
let filteredProizvodi = [...proizvodi];
let currentCategory = 'all';
let korpa = [];

// DOM elementi
const karticeContainer = document.getElementById("kartice-container");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const pageNumbersContainer = document.getElementById("pageNumbers");
const themeToggle = document.getElementById("themeToggle");
const mobileMenu = document.getElementById("mobile-menu");
const navbarMenu = document.querySelector(".navbar-menu");
const categoryTabs = document.querySelectorAll(".category-tab");
const productsSearch = document.getElementById("productsSearch");
const cartToggle = document.getElementById("cartToggle");
const cartSidebar = document.getElementById("cartSidebar");
const cartClose = document.getElementById("cartClose");
const cartBody = document.getElementById("cartBody");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const emptyCart = document.getElementById("emptyCart");
const chatBtn = document.getElementById("chatBtn");
const chatWidget = document.getElementById("chatWidget");
const chatClose = document.getElementById("chatClose");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const callBtn = document.getElementById("callBtn");
const overlay = document.getElementById("overlay");

// Funkcija za generisanje kartice proizvoda
function generisiKarticu(proizvod) {
  const dostupnostKlasa = proizvod.dostupan ? "available" : "not-available";
  const dostupnostTekst = proizvod.dostupan ? "Dostupan" : "Nije dostupan";
  
  return `
    <div class="product-card" data-category="${proizvod.kategorija}">
      <img src="slike/${proizvod.slika}.jpg" alt="${proizvod.naziv}" class="product-image">
      <div class="product-content">
        <h3 class="product-title">${proizvod.naziv}</h3>
        <p class="product-price">${proizvod.cena.toFixed(2)} RSD</p>
        <span class="product-availability ${dostupnostKlasa}">${dostupnostTekst}</span>
        <div class="product-actions">
          <button class="btn btn-cart" ${!proizvod.dostupan ? 'disabled' : ''} data-id="${proizvod.naziv}">
            <i class="fas fa-shopping-cart"></i> ${proizvod.dostupan ? 'Dodaj u korpu' : 'Nedostupno'}
          </button>
          <button class="btn btn-details">
            <i class="fas fa-info-circle"></i> Detalji
          </button>
        </div>
      </div>
    </div>
  `;
}

// Funkcija za prikaz proizvoda
function prikaziProizvode() {
  karticeContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const proizvodiZaPrikaz = filteredProizvodi.slice(startIndex, endIndex);

  if (proizvodiZaPrikaz.length === 0) {
    karticeContainer.innerHTML = '<p class="no-products">Nema proizvoda za prikaz.</p>';
  } else {
    proizvodiZaPrikaz.forEach((proizvod) => {
      karticeContainer.innerHTML += generisiKarticu(proizvod);
    });
    
    // Dodaj event listenere za dugmad "Dodaj u korpu"
    document.querySelectorAll('.btn-cart').forEach(button => {
      button.addEventListener('click', (e) => {
        const productName = e.target.closest('.btn-cart').dataset.id;
        dodajUKorpu(productName);
      });
    });
  }

  updatePaginationButtons();
  generisiPageNumbers();
}

// Funkcija za ažuriranje paginacije
function updatePaginationButtons() {
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === Math.ceil(filteredProizvodi.length / itemsPerPage);
}

// Funkcija za generisanje brojeva stranica
function generisiPageNumbers() {
  pageNumbersContainer.innerHTML = "";
  const totalPages = Math.ceil(filteredProizvodi.length / itemsPerPage);
  
  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement("div");
    pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
    pageNumber.textContent = i;
    pageNumber.addEventListener("click", () => {
      currentPage = i;
      prikaziProizvode();
    });
    pageNumbersContainer.appendChild(pageNumber);
  }
}

// Funkcija za filtriranje po kategoriji
function filterByCategory(category) {
  currentCategory = category;
  
  if (category === 'all') {
    filteredProizvodi = [...proizvodi];
  } else {
    filteredProizvodi = proizvodi.filter(proizvod => proizvod.kategorija === category);
  }
  
  currentPage = 1;
  prikaziProizvode();
}

// Funkcija za pretragu
function searchProducts(query) {
  const searchTerm = query.toLowerCase().trim();
  
  if (searchTerm === '') {
    filterByCategory(currentCategory);
    return;
  }
  
  filteredProizvodi = proizvodi.filter(proizvod => 
    proizvod.naziv.toLowerCase().includes(searchTerm)
  );
  
  currentPage = 1;
  prikaziProizvode();
}

// Funkcije za korpu
function dodajUKorpu(productName) {
  const proizvod = proizvodi.find(p => p.naziv === productName);
  
  if (!proizvod) return;
  
  const existingItem = korpa.find(item => item.naziv === productName);
  
  if (existingItem) {
    existingItem.kolicina += 1;
  } else {
    korpa.push({
      ...proizvod,
      kolicina: 1
    });
  }
  
  updateCart();
  showNotification(`Dodato u korpu: ${proizvod.naziv}`);
}

function ukloniIzKorpe(productName) {
  korpa = korpa.filter(item => item.naziv !== productName);
  updateCart();
}

function updateCart() {
  // Ažuriraj broj proizvoda u korpi
  const totalItems = korpa.reduce((total, item) => total + item.kolicina, 0);
  cartCount.textContent = totalItems;
  
  // Ažuriraj ukupnu cenu
  const totalPrice = korpa.reduce((total, item) => total + (item.cena * item.kolicina), 0);
  cartTotal.textContent = totalPrice.toFixed(2);
  
  // Ažuriraj prikaz korpe
  cartBody.innerHTML = '';
  
  if (korpa.length === 0) {
    emptyCart.style.display = 'block';
  } else {
    emptyCart.style.display = 'none';
    
    korpa.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <img src="slike/${item.slika}.jpg" alt="${item.naziv}" class="cart-item-image">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.naziv}</div>
          <div class="cart-item-price">${item.cena.toFixed(2)} RSD × ${item.kolicina}</div>
        </div>
        <button class="cart-item-remove" data-id="${item.naziv}">
          <i class="fas fa-trash"></i>
        </button>
      `;
      cartBody.appendChild(cartItem);
    });
    
    // Dodaj event listenere za dugmad za uklanjanje
    document.querySelectorAll('.cart-item-remove').forEach(button => {
      button.addEventListener('click', (e) => {
        const productName = e.target.closest('.cart-item-remove').dataset.id;
        ukloniIzKorpe(productName);
      });
    });
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background-color: var(--primary-color);
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1200;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Funkcije za chat
function toggleChat() {
  chatWidget.classList.toggle('active');
  overlay.classList.toggle('active');
}

function sendMessage() {
  const message = chatInput.value.trim();
  
  if (message === '') return;
  
  // Dodaj korisnikovu poruku
  const userMessage = document.createElement('div');
  userMessage.className = 'chat-message user-message';
  userMessage.innerHTML = `
    <div class="message-content">
      <p>${message}</p>
    </div>
  `;
  chatBody.appendChild(userMessage);
  
  // Očisti input
  chatInput.value = '';
  
  // Skroluj na dno
  chatBody.scrollTop = chatBody.scrollHeight;
  
  // Simuliraj odgovor bota
  setTimeout(() => {
    const botResponse = getBotResponse(message);
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot-message';
    botMessage.innerHTML = `
      <div class="message-content">
        <p>${botResponse}</p>
      </div>
    `;
    chatBody.appendChild(botMessage);
    
    // Skroluj na dno
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);
}

function getBotResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('zdravo') || lowerMessage.includes('ćao') || lowerMessage.includes('pozdrav')) {
    return 'Zdravo! Kako vam mogu pomoći danas?';
  } else if (lowerMessage.includes('hvala') || lowerMessage.includes('hvala lepo')) {
    return 'Nema na čemu! Ako imate još pitanja, slobodno pitajte.';
  } else if (lowerMessage.includes('cena') || lowerMessage.includes('koliko košta')) {
    return 'Cene proizvoda možete videti na našem sajtu. Ako vas zanima konkretan proizvod, recite mi koji.';
  } else if (lowerMessage.includes('dostupnost') || lowerMessage.includes('imate li')) {
    return 'Dostupnost proizvoda možete proveriti na našem sajtu. Ako vas zanima konkretan proizvod, recite mi koji.';
  } else if (lowerMessage.includes('radno vreme')) {
    return 'Radimo svakog dana od 08:00 do 22:00. Vikendom od 09:00 do 20:00.';
  } else if (lowerMessage.includes('dostava') || lowerMessage.includes('isporuka')) {
    return 'Vršimo dostavu u roku od 2 sata unutar grada. Besplatna dostava za porudžbine preko 2000 RSD.';
  } else if (lowerMessage.includes('recept') || lowerMessage.includes('lek na recept')) {
    return 'Za lekove na recept je potrebno da imate važeći recept od lekara. Možete ga dostaviti lično ili putem e-maila.';
  } else {
    return 'Hvala vam na pitanju. Za detaljnije informacije možete nas kontaktirati telefonom ili posetiti našu apoteku.';
  }
}

// Event listeneri
prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    prikaziProizvode();
  }
});

nextPageBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(filteredProizvodi.length / itemsPerPage)) {
    currentPage++;
    prikaziProizvode();
  }
});

// Tema (tamna/svetla)
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  
  const icon = themeToggle.querySelector("i");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Mobilni meni
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// Kategorije
categoryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    filterByCategory(tab.dataset.category);
  });
});

// Pretraga
productsSearch.addEventListener("input", (e) => {
  searchProducts(e.target.value);
});

// Korpa
cartToggle.addEventListener("click", () => {
  cartSidebar.classList.add("active");
  overlay.classList.add("active");
});

cartClose.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  overlay.classList.remove("active");
});

checkoutBtn.addEventListener("click", () => {
  if (korpa.length === 0) {
    alert('Vaša korpa je prazna!');
    return;
  }
  
  alert('Hvala vam na kupovini! Vaša porudžbina je primljena.');
  korpa = [];
  updateCart();
  cartSidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Chat
chatBtn.addEventListener("click", toggleChat);
chatClose.addEventListener("click", toggleChat);

chatSend.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Poziv
callBtn.addEventListener("click", () => {
  window.location.href = 'tel:+38121123456';
});

// Overlay
overlay.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  chatWidget.classList.remove("active");
  overlay.classList.remove("active");
});

// Inicijalizacija
prikaziProizvode();

// Smooth scroll za navigacione linkove
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
      
      // Zatvori mobilni meni ako je otvoren
      if (navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    }
  });
});

// Dodavanje efekta za header pri skrolovanju
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.background = 'var(--white)';
    header.style.backdropFilter = 'none';
  }
});
