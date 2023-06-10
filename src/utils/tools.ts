import * as cryptoJS from 'crypto-js'

/**
 * @description: 判断数据类型 ;
 */

export function isObject(value: unknown): value is Record<any, any> {
  return value !== null
    && Object.prototype.toString.call(value) === '[object Object]'
}

export function isFunction(value: unknown): value is Function {
  return typeof value === 'function'
}

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function isUndef(value: unknown): value is undefined {
  return typeof value === 'undefined'
}

export function isArray(value: unknown): value is Array<any> {
  return value !== null
    && Object.prototype.toString.call(value) === '[object Array]'
}

export function isDate(val: unknown): val is Date {
  return (
    Object.prototype.toString.call(val) === '[object Date]'
        && !Number.isNaN((val as Date).getTime())
  )
}

export function getType(value: any) {
  const match = Object.prototype.toString.call(value).match(/ (\w+)]/)
  return match?.[1].toLocaleLowerCase()
}

/**
 * @description: 判断设备 ;
 */

export function getExplorerInfo() {
  const t = navigator.userAgent.toLowerCase()
  return t.includes('msie')
    ? {
        // ie < 11
        type: 'IE',
        version: Number(t.match(/msie ([\d]+)/)?.[1]),
      }
    : t.match(/trident\/.+?rv:(([\d.]+))/)
      ? {
          // ie 11
          type: 'IE',
          version: 11,
        }
      : t.includes('edge')
        ? {
            type: 'Edge',
            version: Number(t.match(/edge\/([\d]+)/)?.[1]),
          }
        : t.includes('firefox')
          ? {
              type: 'Firefox',
              version: Number(t.match(/firefox\/([\d]+)/)?.[1]),
            }
          : t.includes('chrome')
            ? {
                type: 'Chrome',
                version: Number(t.match(/chrome\/([\d]+)/)?.[1]),
              }
            : t.includes('opera')
              ? {
                  type: 'Opera',
                  version: Number(t.match(/opera.([\d]+)/)?.[1]),
                }
              : t.includes('Safari')
                ? {
                    type: 'Safari',
                    version: Number(t.match(/version\/([\d]+)/)?.[1]),
                  }
                : {
                    type: t,
                    version: -1,
                  }
}

/**
 * @description: 文档高度 ;
 */

export function getDocumentTop() {
  const bodyScrollTop = document.body ? document.body.scrollTop : 0
  const documentScrollTop = document.documentElement
    ? document.documentElement.scrollTop
    : 0
  return bodyScrollTop - documentScrollTop > 0
    ? bodyScrollTop
    : documentScrollTop
}

/**
 * @description: 可视窗口高度 ;
 */
export function getWindowHeight() {
  let windowHeight = 0

  if (document.compatMode === 'CSS1Compat')
    windowHeight = document.documentElement.clientHeight

  else
    windowHeight = document.body.clientHeight

  return windowHeight
}

/**
 * @description: 滚动条滚动高度 ;
 */
export function getScrollHeight() {
  const bodyScrollHeight = document.body ? document.body.scrollHeight : 0
  const documentScrollHeight = document.documentElement
    ? document.documentElement.scrollHeight
    : 0
  return bodyScrollHeight - documentScrollHeight > 0
    ? bodyScrollHeight
    : documentScrollHeight
}

/**
 * @description: 滚动 ;
 * @param {*}
 * @return {*}
 */
export function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    left: 0,
    behavior: 'smooth',
  })
}

/**
 * @description:  深度克隆;
 */

export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null
}

export function deepClone<T extends Record<string, any> | null | undefined>(
  obj: T,
): T {
  if (!isDef(obj))
    return obj

  if (Array.isArray(obj))
    return obj.map(item => deepClone(item)) as unknown as T

  if (typeof obj === 'object') {
    const to = {} as Record<string, any>
    Object.keys(obj).forEach((key) => {
      to[key] = deepClone(obj[key])
    })

    return to as T
  }

  return obj
}

/**
 * @description:  生成随机数范围;
 */
export function randomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomString(len: number) {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
  const strLen = chars.length
  let randomStr = ''
  for (let i = 0; i < len; i++)
    randomStr += chars.charAt(Math.floor(Math.random() * strLen))

  return randomStr
}

/**
 * @description: class添加，删除，切换 ;
 */
// 检查元素是否有class
export function hasClass(ele: HTMLElement, className: string) {
  return !!ele.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`))
}

// 元素添加class
export function addClass(ele: HTMLElement, className: string) {
  if (!hasClass(ele, className))
    ele.className += ` ${className}`
}

// 元素移除class
export function removeClass(ele: HTMLElement, className: string) {
  if (hasClass(ele, className)) {
    const reg = new RegExp(`(\\s|^)${className}(\\s|$)`)
    ele.className = ele.className.replace(reg, ' ')
  }
}

// 切换元素的class
export function toggleClass(ele: HTMLElement, className: string) {
  if (!ele || !className)
    return

  let classString = ele.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += `${className}`
  }
  else {
    classString
            = classString.substring(0, nameIndex)
            + classString.substring(nameIndex + className.length)
  }
  ele.className = classString
}

/**
 * @description:  是否是手机设备;
 */

export function isMobile() {
  const regMobileAll
        = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  return regMobileAll.test(window.navigator.userAgent)
}

export function isAndroid() {
  return /android/i.test(navigator.userAgent.toLowerCase())
}

export function isIOS() {
  const reg = /iPhone|iPad|iPod|iOS|Macintosh/i
  return reg.test(navigator.userAgent.toLowerCase())
}

/**
 * @description: cookies ;
 */
export function setCookie(key: string, value: any, expire: number) {
  const d = new Date()
  d.setDate(d.getDate() + expire)
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`
}
export function getCookie(key: string) {
  const cookieStr = unescape(document.cookie)
  const arr = cookieStr.split('; ')
  let cookieValue = ''
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=')
    if (temp[0] === key) {
      cookieValue = temp[1]
      break
    }
  }
  return cookieValue
}
export function delCookie(key: string) {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}

/**
 * @description:  全屏;
 */

export function goToFullScreen(element?: any) {
  element = element || document.body
  if (element.requestFullscreen)
    element.requestFullscreen()
  else if (element.mozRequestFullScreen)
    element.mozRequestFullScreen()
  else if (element.msRequestFullscreen)
    element.msRequestFullscreen()
  else if (element.webkitRequestFullscreen)
    element.webkitRequestFullScreen()
}

export function goExitFullscreen() {
  if (document.exitFullscreen)
    document.exitFullscreen()
}

/**
 * @description:  等待时间;
 */
export function waitTime(time = 100) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

/**
 * @description: 金额处理 ;
 */

export function decimal(num: number, count = 0) {
  const res = 10 ** count
  return Math.round(num * res) / res
}

export function formatMoney(money: string) {
  return money.replace(
    new RegExp(
            `(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`,
            'g',
    ),
    ',',
  )
}

/**
 * @description: 高阶函数 ;
 */
export function compose(...fns: any[]): any {
  return (initial: any) =>
    fns.reduceRight((arg, fn) => fn(arg), initial)
}

/**
 * @description:AES-CBC加密模式;
 */
// 加密
export function cryptoEncrypt(text: string, key: string) {
  return cryptoJS.AES.encrypt(text, cryptoJS.enc.Utf8.parse(key), {
    iv: cryptoJS.enc.Utf8.parse(key),
    mode: cryptoJS.mode.CBC, // CBC算法
    padding: cryptoJS.pad.Pkcs7, // 使用pkcs7
  }).toString()
}

// 解密
export function cryptoDecrypt(text: string, key: string) {
  return cryptoJS.AES.decrypt(text, cryptoJS.enc.Utf8.parse(key), {
    iv: cryptoJS.enc.Utf8.parse(key),
    mode: cryptoJS.mode.CBC, // CBC算法
    padding: cryptoJS.pad.Pkcs7, // 使用pkcs7
  }).toString(cryptoJS.enc.Utf8)
}
