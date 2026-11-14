// ex01.ts - Değişkenler ve Tipler
const productName: string = "Kablosuz Kulaklık";
const price: number = 12.89;
const inStock: boolean = true;

// `
console.log(`${productName} - ${price} TL Stokta: ${inStock} `);

// KDV dahil fiyat hesaplama fonksiyonu
function addVat(price: number): number {
    return price * 1.2;
}

// 200 TL'lik ürünün KDV dahil fiyatını hesaplayalım
const result = addVat(200);

// KDV dahil fiyatı ekrana yazdıralım
console.log(`KDV dahil fiyat: ${result} TL`);

// Çarpma işlemi yapan fonksiyon
function multiply(a:number, b:number):number {
    return a*b;
}

// Çarpma işlemi yapalım
const multiplyResult = multiply(5, 10);

// Çarpma sonucunu ekrana yazdıralım
console.log(`Çarpma sonucu: ${multiplyResult}`);
