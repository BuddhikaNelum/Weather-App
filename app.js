const location = process.argv[2]

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (!location) {
    return console.log('Please provide a location')
} 

geocode(location, (error, {latitude ,longitude, location}) => {
    if (error) {
        return console.log(error)
    }
    forecast(latitude, longitude, 'm', (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    })
})