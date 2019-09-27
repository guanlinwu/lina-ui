import Time from './time'
import create from './create'
import diff from './diff'
import move from './move'
let prototype = Time.prototype
const obj = {
  ...create,
  ...diff,
  ...move
}
Object.keys(obj).forEach(key => {
  Object.defineProperty(prototype, key, {
    value: obj[key]
  })
})
export default Time
