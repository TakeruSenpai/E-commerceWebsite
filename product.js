router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const products = [
  {
    id: 1,
    name: "Plaid College Shirt",
    price: 600,
    image: "/Images/products/Men's Plaid College Style Shirt.jpg",
    description: "High quality cotton shirt perfect for casual wear."
  },
  {
    id: 2,
    name: "Plaid College Shirt Men",
    price: 600,
    image: "/Images/products/Men's Plaid College Style Shirt.jpg",
    description: "Stylish and comfortable for everyday use."
  }
];

const product = products.find(p => p.id == id);

document.querySelector(".product-title").textContent = product.name;
document.querySelector(".product-price").textContent = "₹" + product.price;
document.querySelector(".product-image").src = product.image;
document.querySelector(".product-description").textContent = product.description;


