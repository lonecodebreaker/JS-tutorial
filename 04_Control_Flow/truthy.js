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