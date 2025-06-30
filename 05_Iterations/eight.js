//reduce method in array 

// With Normal Function
const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc,currVal){
       console.log(`acc : ${acc} and currVal : ${currVal}`);   
       return acc + currVal
}, 0)
console.log(myTotal);

// with arrow function
const myTotal = myNums.reduce( (acc, currVal) => acc+currVal , 0)
console.log(myTotal);


// example of reduce method application
const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
     {
        itemName : "python course",
        price : 999
    },
     {
        itemName : "data science course",
        price : 12999
    },
     {
        itemName : "mobile dev course",
        price : 5999
    }
]

const cartTotal = shoppingCart.reduce( (acc, item) => (acc+ item.price),0)
console.log(cartTotal);
