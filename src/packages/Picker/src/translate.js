function upTranslate (element, offsetY) {
  let y = getY(element) + (offsetY > 0 ? Math.ceil(offsetY) : Math.floor(offsetY))
  setY(element, y)
  return y
}
function getY (element) {
  return Number(element.style.getPropertyValue('transform').replace(/[^-\d]/g, ''))
}
function setY (element, y) {
  element.style.setProperty('transform', `translateY(${y}px)`)
}
function easeOut (target, current, part) {
  var step = (target - current) / part
  step > 0 ? Math.ceil(step) : Math.floor(step)
  return step
}
export default {
  upTranslate,
  getY,
  setY,
  easeOut
}
