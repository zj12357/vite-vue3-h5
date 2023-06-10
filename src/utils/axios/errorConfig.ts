import type { AxiosResponse } from 'axios'
import type { Result } from '~/types/expand/axios'

export function errorData(res: AxiosResponse<Result<any>>) {
  return {
    data: null,
    msg: res.data.msg,
    code: res.data.code,
  }
}
