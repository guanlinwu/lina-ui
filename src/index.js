import { version } from '../package.json'
import config from './config.json'
import * as packages from '@/packages'
import requestAnimationFrameFn from '@/utils/compatibility/requestAnimationFrame'
import './styles/index.scss' // 样式
requestAnimationFrameFn()
let packagesList = config.packages
let components = {} // 组件
let methods = {} // 方法 $挂载
let directives = {} // 指令 $挂载

packagesList.map(item => {
  const pkg = packages[item.name]
  if (!pkg) {
    return
  }
  if (/component/.test(item.type)) {
    // console.log(pkg.component.name)
    components[pkg.component.name] = pkg.component
  }
  if (/method/.test(item.type)) {
    methods[item.name] = pkg.method
  }
  if (/directive/.test(item.type)) {
    directives[item.name] = pkg.directive
  }
})

// console.log('components', components)
// console.log('methods', methods)

let install = function (Vue, options = {}) {
  if (install.installed) return

  /**
   * 安装方法，附加在Vue的原型链，以$ + 名字（小写）暴露出来
   */
  for (let methodKey in methods) {
    Object.defineProperty(Vue.prototype, `$${methodKey.toLowerCase()}`, {
      value: methods[methodKey]
    })
  }
  /**
   * 安装组件，便于全局直接引用在template中
   */
  // console.log(components)
  for (const componentKey in components) {
    components[componentKey] &&
      components[componentKey].name &&
      Vue.component(components[componentKey].name, components[componentKey])
  }
  /**
   * 安装指令
   */
  for (const directiveKey in directives) {
    directives[directiveKey] && Vue.use(directives[directiveKey])
  }

  console.info(`\x1b[35m lina-ui has been installed， version： ${version} `)

  const styles = [
    'display: block',
    'padding: 0 20px',
    'font-weight: bold',
    'text-align: center',
    'line-height: 40px',
    'color: #fff',
    'background-image: linear-gradient(#ff70e3, #c706a2)',
    'background-color: transparent',
    'border-radius: 10px',
    'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
  ].join(';')

  console.log('\x1b[35m 配合@linahome/cli（lina指令），拉取指定的ui组件，进行二次开发。详细可戳 👉 https://www.npmjs.com/package/@linahome/cli')
  console.log('%c 安装lina指令: npm i -g @linahome/cli', styles)

  install.installed = true
}

typeof window !== 'undefined' && window.Vue && install(window.Vue)

export default {
  version,
  install,
  // ...components,
  components: {
    ...components
  },
  // methods: {
  //   ...methods
  // }
  ...methods
}
