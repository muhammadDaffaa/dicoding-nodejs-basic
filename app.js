// const message = name =>{
//     console.log(Object.getOwnPropertyNames(global))
    
// }

// message()

// const process  = require('process')

// const server = new Server({

//     host : process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com'

// })
// server()
// // const cpuInformation = process.memoryUsage()
// console.log(cpuInformation);

// const firstName = process.argv[2]
// const lastName = process.argv[3]

// console.log(`${firstName} ${lastName}`);\


// const coffee = require('./process-object/coffee')

// console.log(coffee);

const moment  = require('moment')

const date  = moment().format("MMM Do YY")

console.log(date);