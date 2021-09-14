import myTemplate from '../templates/myItem.handlebars'
import refs from './refs'
import debounce from 'debounce'
import array from '../db/array'
console.log(array)
// console.log(refs)
const { list, input } = refs

const result = myTemplate(array)
// console.log(result)

list.insertAdjacentHTML('afterbegin', result)
input.addEventListener('input', debounce(cb, 350))

function cb(e) {
  console.log(e.target.value)
}
