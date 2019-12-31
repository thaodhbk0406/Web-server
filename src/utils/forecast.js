const request = require('request')

const forecast = (a, b, callback)=>{
    const url= 'https://api.darksky.net/forecast/9e90f86d9844f90302b9be3af9d629e7/'+a+','+b
    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('Error1!', undefined)
        }else if(response.body.currently.time===0){
            callback('Error2', undefined)
        }else{
            callback(undefined, response.body.timezone)
        }
    })
}

module.exports = forecast