const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'pant', price: 700},
    {name: 'shirt', price: 500},
    {name: 'belt', price: 200},
    {name: 't-shirt', price: 900}
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        // console.log(product);
        sum = sum + product.price;
    }
    return sum;

}
const expense = totalCost(shoppingCart);
console.log(expense);