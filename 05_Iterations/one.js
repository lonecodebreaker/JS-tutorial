for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

//loop inside loop 
for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value is : ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value is ${j} and outer loop is ${i}`);
        console.log(i+'*'+j+'='+ i*j);
    }
}

let myArray = ["flash" , "batman","superman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


//Important keywords 
// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);

}


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);

}