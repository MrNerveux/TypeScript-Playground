// CalculteTotal fonksiyonu tanımı
// Üç parametre alsın: price (birim fiyat), quantity (adet) ve opsiyonel discount (indirim yüzdesi, ? ile).
// İndirim verilmezse fiyat × adet döndürsün. İndirim verilirse bu toplamdan yüzde indirimi düşsün.
function calculateTotal(price: number, quantity:number, discount?: number): number {
    const total = price * quantity;
    if (discount === undefined) {
        return total;
    }

return total - (total * discount / 100);
    }

// Fonksiyonu test edelim
console.log(calculateTotal(100, 3));      // beklenen: 300
console.log(calculateTotal(100, 3, 10));  // beklenen: 270
console.log(calculateTotal(50, 2, 50));   // beklenen: 50