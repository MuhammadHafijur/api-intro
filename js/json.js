// Javascript Object Notation
// JSON

const user = {id: 11, name: 'Rahim Rahman', job: 'manager'}
console.log(user)
const stringified = JSON.stringify(user);
// console.log(user)
// console.log(stringified)

const shop = {
    name: 'Rafiq Store',
    address: 'Riverside Road',
    profit: 1500,
    product: ['laptop', 'watch', 'phone'],
    owner: {
        name: 'Rafiq Rahman',
        profession: 'Developer'
    },
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
// console.log(shop)
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted)