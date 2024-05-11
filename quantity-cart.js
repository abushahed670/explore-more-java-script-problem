const shoppingCart = [
    {name: 'shoe', price: 1200, quantity:5},
    {name: 'pant', price: 700, quantity:4},
    {name: 'shirt', price: 500, quantity:7},
    {name: 'belt', price: 200, quantity:2},
    {name: 't-shirt', price: 900, quantity:8}
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        // console.log(product);
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;

}
const expense = totalCost(shoppingCart);
console.log(expense);