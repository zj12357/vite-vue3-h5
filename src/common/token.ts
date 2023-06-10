/**
 * @description:  token处理;
 */
import { getStorage, removeStorage, setStorage } from '~/utils/storage'

const tokenKey = 'token'

export default Object.freeze({
  clearToken: () => {
    removeStorage(tokenKey)
  },
  setToken: (data: string) => {
    setStorage(tokenKey, data)
  },
  getToken: () => {
    return getStorage(tokenKey)
  },
})
