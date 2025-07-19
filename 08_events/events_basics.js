// document.querySelector('#eagle').onclick = function () {
//     alert("eagle clicked");
// }

// document.querySelector('#eagle').addEventListener('click', function (e) {
//     e.preventDefault();
//     alert('eagle clicked again');
// }, false)

// //first
// document.querySelector('#images').addEventListener('click', function (e) {
//     console.log('ul got clicked');
// })
// //second
// document.querySelector('#eagle').addEventListener('click', function (e) {
//     console.log('owl clicked');
//     e.stopPropagation();
// })

// document.getElementById('google').addEventListener('click',function(e){
//        e.stopPropagation();

//        e.preventDefault();

//        console.log("google clicked");

// },false)

document.querySelector('#images').addEventListener('click', function (e) {

    console.log(e.target.tagName);
    if (e.target.tagName == 'IMG') {
        console.log(e.target.id);

        const removeIt = e.target.parentNode;
        // removeIt.remove // first method 
        removeIt.parentNode.removeChild(removeIt);
    }

})


