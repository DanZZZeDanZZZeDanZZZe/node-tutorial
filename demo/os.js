const os = require('os')

console.log('Операционная система', os.platform())
console.log('Архитектура процессора', os.arch())
console.log('Конфигурация процессора', os.cpus())
console.log('Свободная память: ', os.freemem())
console.log('Свободная память: ', os.totalmem())
console.log('Общая память: ', os.hostname())
console.log('Включен: ', os.uptime())