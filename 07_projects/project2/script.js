const form = document.querySelector('form')

// these usecase will give empty values as it take value before loading
//   const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
         result.innerHTML = `please enter a valid height ${height}`
    }else if(weight === '' || height <0 || isNaN(weight)){
         result.innerHTML = `please enter a valid weight ${weight}`
    }else{
       const bmi = (weight/((height*height)/10000)).toFixed(2); 
       result.innerHTML = `<span> ${ bmi} </span>`
    }

})