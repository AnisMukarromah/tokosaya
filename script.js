// Data produk dummy
const products = [
  { name: "Kaos Cressida Premium", price: 141220, image: "cressida.JPG" },
  { name: "PANARYBODY Sepatu Sneakers Pria Model Terbaru", price: 195000, image: "sepatu.png" },
  { name: "jam tangan original skymax 2302G tahan beku tahan air - Fly Watch", price: 119250, image: "jam.png" },
  { name: "Korea Kacamata Hitam Optik Anti Warna Permen Kacamata candy Wanita / Pria Fashion Sunglasses 005", price: 97500, image: "kacamata.png" },
  { name: "AR APPAREL Compact Waistbag Tas Selempang Pria Stylish Slingbag Waterproof Tas Pinggang Cowok", price: 49500, image: " tas.png" },
  { name: "BRIGAS DENIM CELANA KANVAS PANJANG PRIA KUALITAS EMBA ORIDINAL DRIC", price: 132925, image: " celana.png" },
];

// Fungsi untuk menampilkan produk
function displayProducts(productList) {
  const container = document.getElementById("productContainer");
  container.innerHTML = ""; // Kosongkan kontainer

  productList.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="card-body">
        <h3>${product.name}</h3>
        <p>Harga: Rp${product.price.toLocaleString()}</p>
        <a href="#" class="btn">Lihat Detail</a>
    </div>
`;
    container.appendChild(card);
  });
}

// Fungsi pencarian produk
function filterProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter((product) => product.name.toLowerCase().includes(query));
  displayProducts(filtered);
}

// Tampilkan semua produk saat pertama kali halaman dibuka
window.onload = () => displayProducts(products);
