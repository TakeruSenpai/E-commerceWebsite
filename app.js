
  async function loadProducts() {
  try {
    const res = await fetch("http://localhost:3000/api/products")
    const products = await res.json();

    const container = document.querySelector(".products-container1");

    container.innerHTML = "";

    products.forEach(product => {
      container.innerHTML += `
        <div class="product-card1">
          <a href="product.html?id=${product._id}">
            <img src="${product.image}" alt="${product.name}">
          </a>
          <h3>${product.name}</h3>
          <p class="price">₹${product.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
    });

  } catch (error) {
    console.error("Failed to load products:", error);
  }
}

loadProducts(); 
  
  
  function togglesubmenu(button) {
  button.nextElementSibling.classList.toggle('show');
}

// Hero Section

  const group = document.querySelector(".group");
  const cards = document.querySelectorAll(".card");

  let index = 0;
  const gap = 16;
  const cardWidth = cards[0].offsetWidth + gap;
  const visibleCards = 5;
  let autoSlideTimer;

  function getLimit() {
  if (window.innerWidth <= 480) {
    return 5;     
  } else {
    return 3;      
  }
}

  function slideNext() {
    index++;
     if (index > getLimit()) {
      index = 0;
    } 
    updateSlide();
  }

  function updateSlide() {
  group.style.transform = `translateX(-${index * cardWidth}px)`;
}

function startAutoSlide() {
  autoSlideTimer = setInterval(slideNext, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}


// hero section button

function GoNext() {
  slideNext();
  resetAutoSlide();
}

function GoBack() {
  index--;

  if (index < 0) {
    index = getLimit();
  }

  updateSlide();
  resetAutoSlide();
}

// Product Cards

const ProductContainer1 = document.querySelector(".products-container1");

const Productgap = 15;
const ProductcardWidth1 = document.querySelector(".product-card1").offsetWidth + Productgap;

function ProductGoNext1() {
  const maxScroll =
    ProductContainer1.scrollWidth - ProductContainer1.clientWidth;

  if (ProductContainer1.scrollLeft >= maxScroll - 6) {
    // If at end → go back to start
    ProductContainer1.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    ProductContainer1.scrollBy({
      left: ProductcardWidth1,
      behavior: "smooth"
    });
  }
}

function ProductGoBack1() {
  if (ProductContainer1.scrollLeft <= 6) {
    // If at start → go to end
    ProductContainer1.scrollTo({
      left: ProductContainer1.scrollWidth,
      behavior: "smooth"
    });
  } else {
    ProductContainer1.scrollBy({
      left: -ProductcardWidth1,
      behavior: "smooth"
    });
  }
}

//product card 2

const ProductContainer2 = document.querySelector(".products-container2");
const ProductcardWidth2 = document.querySelector(".product-card2").offsetWidth + Productgap;

function ProductGoNext2() {
  const maxScroll =
    ProductContainer2.scrollWidth - ProductContainer2.clientWidth;

  if (ProductContainer2.scrollLeft >= maxScroll - 6) {
    // If at end → go back to start
    ProductContainer2.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    ProductContainer2.scrollBy({
      left: ProductcardWidth2,
      behavior: "smooth"
    });
  }
}

function ProductGoBack2() {
  if (ProductContainer2.scrollLeft <= 6) {
    // If at start → go to end
    ProductContainer2.scrollTo({
      left: ProductContainer2.scrollWidth,
      behavior: "smooth"
    });
  } else {
    ProductContainer2.scrollBy({
      left: -ProductcardWidth2,
      behavior: "smooth"
    });
  }
}








