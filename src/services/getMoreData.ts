import axios from 'axios'
import { QueryFunctionContext } from 'react-query'

const PROXY = window.location.hostname === 'localhost' ? '/api/v1' : '/proxy'

const getMoreData = async ({ pageParam = 0 }: QueryFunctionContext) => {
  const response = await axios
    .get(`${PROXY}/products?offset=${pageParam}&limit=20`)
    .then((res) => {
      return res.data
    })
    .catch(() => {
      throw new Error('API 통신 실패!')
    })
    .finally(() => {
      return undefined
    })
  return response
}

export default getMoreData
