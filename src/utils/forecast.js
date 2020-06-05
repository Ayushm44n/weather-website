const request = require("request")

const forecast = (lat, lon, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon + '&appid=0f43675af86b653a791ae239cf27c1b5&units=metric'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to fetch information', undefined)
        }else if(body.message){
            callback('Wrong data', undefined)
        }else{
            callback(undefined, 'It is currently ' + body.main.temp + ' degress out.')
        }
    })
}

module.exports = forecast