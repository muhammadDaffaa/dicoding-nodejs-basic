// Include PROCESS Module
const process  = require('process')

const initialMemoryUsage = process.memoryUsage().heapUsed //TODO 1
const yourName = process.argv[2] //TODO 2
const environment = process.env.NODE_ENV //TODO 3

for(let i = 0 ; i<=10000;i++){
// Process looping akan membuat memori naik

}

const currentMemoryusage = process.memoryUsage().heapUsed //TODO 4

console.log(`Hai, ${yourName}`)
console.log(`Mode Environment : ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryusage}`)