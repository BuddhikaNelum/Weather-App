const location = process.argv[2]

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (!location) {
    return console.log('Please provide a location')
} 

geocode(location, (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, 'm', (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})