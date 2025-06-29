// Some values are not exactly true or false bu they are assumed truth or false so they called truthy or falsy values.

const userEmail = "shubam@ai.com"

if(userEmail)
{
    console.log(" Got user email ");
} else {
    console.log(" Dont have user email ");
}

//**Truthy value** = Means which values are considered truth by JS 

// ex ⇒    all values except falsy values and anything between double quote is truthy value “0” , ‘false’ , “ ” ,[ ], { } , function(){ }

// // Note ⇒ If you watch closely “” → falsy value as here is empty string , but 
// //              ” “ → truthy value as between double qoute it have white space

// // **Falsy Value** = Means which values are considered false by JS 

// // example ⇒ false , 0 , -0 , BigInt 0n , “ ” , null , undefined , NaN

// //Array should not be directly checked 

// const userName = []

// if(userName.length === 0)
// {
//     console.log("Array is empty");
// }

// //checking empty object but not directly

const emptyObj =  {}

// by checking its keys that will be basically enclosed in array  so technically checking empty array
if(Object.keys(emptyObj).length === 0 ){
      console.log(" object is empty ");
}

// if you see in developer mode in browser console
// false == 0 // output = true
// false == '' // output =  true
// 0 == '' // output = true


// Nullish Coalescing Operator (??) : numm undefined
// this logical opertaor is for special case when we get response from database as null or undefined , in that case it knows what to do in that case

let val1;
//val1 = 5 ?? 10   // output = 5
//val1 = null ?? 10  // output = 10 , as if another one have some value or it will assign null to val1 
//val1 = undefined ?? 15 // same as above
val1 = null ?? 10 ?? 15  // output = 10 ,here it will print any first value it will get after null 
console.log(val1);

//Ternary operator
// synatax => condition ? true : false

const iceTeaPrice  = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80 ");


