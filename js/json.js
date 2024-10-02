//JSON (JavaScript Object Notation)
const obj = {id: 1, name: 'nur', job: 'developer'};
console.log(obj)
const stringified = JSON.stringify(obj);
console.log(stringified)
const shop = {
    owner: 'alia',
    address: {
        street: 'kochukhet bhoot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop','mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
const shopParse = JSON.parse(shopJSON);
console.log(shopParse)