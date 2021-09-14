// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ИМПОРТЫ --------------------------------
// ----------------------------------------------------------------------------

import './css/styles.scss'
import './images/sprite.svg'
import db from './db/db.json'
import templ from './templates/templ.handlebars'
import refs from './js/refs'
import './js/func'
import './js/listeners'
import './js/createItemsByTemplate'
// именованый импорт
import { hello1, hello2 } from './js/func'
// hello1()
// hello2()

// дефолтный импорт
import data from './js/func'
// console.log('data', data)
const { obj: myObj, arr: myArr } = data
// console.log(myObj)
// console.log(myArr)
