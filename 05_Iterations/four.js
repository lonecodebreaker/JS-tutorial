// for-of loop in objects not applicable so we use for-in loop here.
// for-in loop

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}