// Mini alıştırma

//ex04.ts adında yeni bir dosya aç ve şunları yap:

//phone adında bir nesne oluştur. Özellikleri: name (bir telefon adı), price (bir fiyat), inStock (true ya da false).
//Üç özelliği ayrı ayrı console.log ile yazdır.
//Ardından tek satırda şablon metinle şu formatta yazdır: Telefon adı - fiyat TL
//npx tsx ex03.ts ile çalıştır.

const phone ={
    name:"İphone 14",
    price: 1199.50,
    inStock: true,
};

console.log(phone.name);
console.log(phone.price);
console.log(phone.inStock);

// Şablon Metin
console.log(`Seçtiğiniz ürün: ${phone.name} ve fiyatı: ${phone.price} TL`);

console.log("===============================");

/* 
Mini alıştırma 2

Dosyanın en üstüne Product adında bir interface yaz. 
Alanları: name (metin), price (sayı), category (metin), inStock (doğru/yanlış).
Mini alıştırma 1'de yazdığın phone nesnesini const phone: Product = { şeklinde değiştir. 
Ne oldu? Kırmızı çizgi çıkacak; fareyle üzerine gel ve mesajı oku. 
Sonra eksik olan category alanını ekleyerek düzelt.
laptop adında, Product tipinde ikinci bir nesne oluştur ve tüm bilgilerini tek satırda yazdır.
Bilerek hata yap: laptop nesnesinde price değerini tırnak içine al ("25000" gibi).
Hata mesajını oku, sonra düzelt.
Son olarak console.log(laptop.nmae); yaz (yazım hatası bilerek). VS Code ne diyor? 
*/

interface Product{
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

const phone2: Product = {
    name: "İphone 14",
    price: 1199.50,
    category: "Telefon",
    inStock: true,
};

const laptop: Product = {
    name: "Macbook Pro",
    price: 25000, // Hata: number yerine string
    category: "Bilgisayar",
    inStock: true,
};

console.log(`Lapton ismi: ${laptop.name} ve fiyatı: ${laptop.price} TL. 
Stokta mevcut mu: ${laptop.inStock ? "Mevcut" : "Mevcut değil"}`);
