/**
 * 根据移动距离修改translateY
 * @param {HTMLElement} element dom
 * @param {Number} offsetY 手指每次滑动的距离
 * @returns {Number} element的translateY
 */
function upTranslate (element, offsetY) {
  let y = getY(element) + (offsetY > 0 ? Math.ceil(offsetY) : Math.floor(offsetY))
  setY(element, y)
  return y
}
/**
 * 获取translateY
 * @param {HTMLElement} element dom
 * @returns {Number}
 */
function getY (element) {
  return Number(element.style.getPropertyValue('transform').replace(/[^-\d]/g, ''))
}
/**
 * 修改translateY
 * @param {HTMLElement} element dom
 * @param {Number} y 距离
 */
function setY (element, y) {
  element.style.setProperty('transform', `translateY(${y}px)`)
}
/**
 * ease-out
 * @param {Number} target 目标距离
 * @param {Number} current 当前距离
 * @param {Number} part 系数
 * @returns {Number} 前进距离
 */
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
