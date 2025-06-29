// for-of loop in objects not applicable so we use for-in loop here.
// for-in loop

// const myObject = {
//     js : 'javascript',
//     cpp : 'C++',
//     rb : 'ruby',
//     swift : "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "rb" ,"py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

//Actually in array there is also keys if we read documentation but its keys starts from 0 and it can only be number thats why Object is dicovered in js to make keys whatever we want 

// for-in loop in  map
const map = new Map()

map.set('in', "india")
map.set('usa',"america")
map.set('fr',"france")
map.set('in', "india")

for (const key in map) {
    console.log(key);
}

// output = no output as non iterable
// - The `for...in` loop iterates over **enumerable string keys** of **objects**.
// - It is **designed for objects**, not for special iterable data structures like `Map`.


