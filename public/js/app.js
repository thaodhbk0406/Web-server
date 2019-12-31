console.log('Clent side javascript say hello!')

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageFirst  = document.querySelector('#message-1')
const messageSecond  = document.querySelector('#message-2')

// messageFirst.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = searchElement.value


    console.log(location)
    fetch('http://localhost:8080/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageFirst.textContent = data.error
            console.log(data.error)
        }else{
            messageFirst.textContent = data.location
            console.log(data.location)
            messageSecond.textContent = data.forecast
            console.log(data.forecast)
        }
    })
})

})