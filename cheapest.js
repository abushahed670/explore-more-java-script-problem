const phones = [
    {name:'samsung', camera: 22, storage:'32gb', price:36000, color: 'silver'},
    {name:'walton', camera: 32, storage:'32gb', price:22000, color: 'black'},
    {name:'xamoi', camera: 40, storage:'32gb', price:26000, color: 'pink'},
    {name:'viv0', camera: 24, storage:'32gb', price:46000, color: 'blue'},
    {name:'Iphone', camera: 60, storage:'32gb', price:50000, color: 'gold'},
    {name:'onePlus', camera: 122, storage:'32gb', price:60000, color: 'sea-green'}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;

        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);