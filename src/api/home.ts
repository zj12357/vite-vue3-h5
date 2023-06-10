import { deffHttp } from '~/utils/axios'
import type { HallParams, HallResult } from '~/types/api/home'

enum Api {
  CMS_HALL_CACHE = '/api/cms/hall/cache',
}

export function getHallList(data: HallParams) {
  return deffHttp.post<HallResult>(
    { url: Api.CMS_HALL_CACHE, data },
    { errorMessageMode: 'message', withToken: false },
  )
}
