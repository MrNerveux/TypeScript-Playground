interface Product {
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

const products: Product[] = [
  { name: "Kulaklık", price: 1299.9, category: "Elektronik", inStock: true },
  { name: "Tişört", price: 349, category: "Giyim", inStock: false },
  { name: "Mouse", price: 450, category: "Elektronik", inStock: true },
  { name: "Mont", price: 2499, category: "Giyim", inStock: false },
  { name: "Şarj Kablosu", price: 199, category: "Elektronik", inStock: true },
];

console.log("--- Tüm ürünler ---");
for (const product of products) {
  console.log(`${product.name} (${product.category}): ${product.price} TL`);
}

console.log("Görev1: Stokta olmayan ürünler");
for (const product of products) {
    if(!product.inStock) {
        console.log(`${product.name} (${product.category}): ${product.price} TL`);
    }
}

console.log("Görev2: Fiyatı 500 TL'den yüksek olan ürünler");
for (const product of products) {
    if(product.price > 500) {
        console.log(`${product.name} (${product.category}): ${product.price} TL`);
    }
}   

console.log("Görev3: Elektronik ürün fiyatları toplamı");
let elektronikToplam = 0;
for (const product of products) {
    if(product.category === "Elektronik") {
        elektronikToplam += product.price;
    }
}
console.log(`Elektronik ürünlerin toplam fiyatı: ${elektronikToplam} TL`);

