const isMove = 'ontouchstart' in window
const eventName = {
  start: isMove ? 'touchstart' : 'mousedown',
  move: isMove ? 'touchmove' : 'mousemove',
  end: isMove ? 'touchend' : 'mouseup'
}
/**
 * @param {HTMLAnchorElement} element
 * @param {Object} options start,move,end
 * @export
 * @class Drag
 */
export default class Drag {
  constructor (element, options) {
    this.element = element
    this.options = options
    this.startX = 0
    this.startY = 0
    this.deltaX = 0
    this.deltaY = 0
    this.offsetX = 0
    this.offsetY = 0
    this.isDragging = false
    this.createEvent()
    this.onEvent()
  }
  // 创建函数
  createEvent () {
    this.eventFn = {
      start: event => {
        if (this.isDragging) return
        this.resetTouchStatus()
        const site = this.getSite(event)
        this.deltaX = this.startX = site.clientX
        this.deltaY = this.startY = site.clientY
        this.EventListener('add')
        this.handle('start', event)
      },
      move: event => {
        this.isDragging = true
        const site = this.getSite(event)
        this.offsetX = site.clientX - this.deltaX
        this.offsetY = site.clientY - this.deltaY
        this.deltaX = site.clientX
        this.deltaY = site.clientY
        this.handle('move', event)
      },
      end: event => {
        this.EventListener('remove')
        this.isDragging = false
        this.handle('end', event)
      }
    }
  }
  // 绑定事件
  onEvent () {
    let { eventFn, element } = this
    Object.keys(eventFn).forEach(key => {
      element.addEventListener(eventName[key], eventFn[key])
    })
    if (this.isMove) {
      element.addEventListener('touchcancel', eventFn.end)
    }
  }
  handle (name, event) {
    if (typeof this.options[name] === 'function') this.options[name](event)
  }
  EventListener (name) {
    if (!isMove) {
      this.element[name + 'EventListener']('mousemove', this.eventFn.move)
      this.element[name + 'EventListener']('mouseup', this.eventFn.end)
    }
  }
  getSite (event) {
    return isMove ? event.changedTouches[0] || event.touches[0] : event
  }
  resetTouchStatus () {
    this.offsetY = this.offsetX = this.deltaY = this.deltaX = 0
  }
}
