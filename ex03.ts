// Deney 1: if kontrolü olmadan
function testWithoutCheck(price: number, quantity: number, discount?: number): number {
  const total = price * quantity;
  return total - (total * discount) / 100;
}

console.log("Deney 1:", testWithoutCheck(100, 3));


// Deney 2: if kontrolü ile
function testWithCheck(price: number, quantity: number, discount?: number): number {
    const total = price * quantity;
    if (discount === undefined) {
        return total;
    }
    return total - (total * discount) / 100;
}

console.log("Deney 2:", testWithCheck(100, 3));
console.log("Deney 2:", testWithCheck(100, 3, 10));