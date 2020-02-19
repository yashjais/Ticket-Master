const pick = require('lodash/pick')

const obj = {
    name: 'yash',
    mobile: '8989123637',
}

console.log(pick(obj, ['name']))
console.log(pick(obj, ['game'])) // no game property - it will be an empty object