// const coding = ["js", "ruby" ,"python","java","cpp"]
// // some loops are directly added to proprties and that type of loops are for-each loop not typical for loop

coding.forEach( function (item){ 
   console.log(item);
}  )
 
// using arrow function
coding.forEach( (item) => { 
    console.log(item);
} )

// using external function
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

//accessing multiple parameter
coding.forEach((item ,index, arr) => {
     console.log(item , index , arr);
})


// About array which contain objects

const myCoding = [
    {
        languageName : "javascript",
        languageFilename : "js"
    },
    {
        languageName : "python",
        languageFilename : "py"
    },
    {
       languageName : "ruby",
       languageFilename : "rb" 
    }
]

myCoding.forEach((item) => {
     console.log(item.languageName);
})