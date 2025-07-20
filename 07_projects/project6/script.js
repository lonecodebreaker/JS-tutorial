
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color;
}

let colorSpectrum;
const startChangingColor = function () {

    if (!colorSpectrum) {
        colorSpectrum = setInterval(changeBgColor, 1000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function () {
    clearInterval(colorSpectrum)

    colorSpectrum = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)





// If you remove the if (!colorSpectrum) check and directly write:

// colorSpectrum = setInterval(changeBgColor, 1000);

// Inside the startChangingColor function, then every time the "Start" button is clicked, a new interval will be created — even if one is already running.That means:
// ✅ What Happens
// 1. Multiple intervals will start stacking up.
// 2. changeBgColor will be called multiple times per second as intervals accumulate.
// 3. Background color will change rapidly and unpredictably due to multiple overlapping timers.


// if (!colorSpectrum)

// means:

// "If colorSpectrum is not truthy (i.e., if it's null, undefined, 0, false, or an empty string), then run the code inside the if block."
// 1. colorSpectrum starts as undefined, so the first time the button is clicked, !colorSpectrum is true, and the interval starts.
// 2. The second time, colorSpectrum now holds a timer ID (a number), so !colorSpectrum is false, and it doesn't start another interval.