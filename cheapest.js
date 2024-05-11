const phones = [
    {name:'samsung', camera: 12, storage:'32gb', price:36000, color: 'silver'},
    {name:'walton', camera: 12, storage:'32gb', price:22000, color: 'silver'},
    {name:'xamoi', camera: 12, storage:'32gb', price:26000, color: 'silver'},
    {name:'viv0', camera: 12, storage:'32gb', price:46000, color: 'silver'},
    {name:'Iphone', camera: 12, storage:'32gb', price:50000, color: 'silver'},
    {name:'onePlus', camera: 12, storage:'32gb', price:60000, color: 'silver'}
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