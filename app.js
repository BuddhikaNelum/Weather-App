const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('galle', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(6.0535, 80.2210, 'f', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })