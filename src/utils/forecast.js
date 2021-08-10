const request = require('request')

const forecast = (latitude, longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9dd4c908daef4525c7e5116dc1abcdfb&query='+latitude+','+longitude+'&units=f'

    request({url, json: true}, (error, {body}) => {
        if(error){
                    callback('Unable to connect to weather services', undefined)
                } else if(body.error){ 
                    callback('Unable to find location. Try again', undefined)
                }else {
                    const temp = body.current.temperature
                    const feels = body.current.feelslike
                    const humidity = body.current.humidity
                    callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + temp + ' degress out. It feels like ' + feels + ' degress out and a humidity of '+humidity+'.')
                }
    })
}

module.exports = forecast