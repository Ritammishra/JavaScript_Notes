const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr , 0)

// console.log(myTotal);

const shoppIngCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobile Course",
        price: 4999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
]

const price =  shoppIngCart.reduce( (acc, item) => acc + item.price , 0)

console.log(price);