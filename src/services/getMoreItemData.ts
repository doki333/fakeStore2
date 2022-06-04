import axios from 'axios'
import { QueryFunctionContext } from 'react-query'

interface IProps {
  pageParam: QueryFunctionContext
  code: number | null
}

const PROXY = window.location.hostname === 'localhost' ? '/api/v1' : '/proxy'

const getMoreItemData = async ({ pageParam, code }: IProps) => {
  const prevAddr = code === null ? '' : `/categories/${code}`
  const response = await axios
    .get(`${PROXY}${prevAddr}/products?offset=${pageParam}&limit=20`)
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

export default getMoreItemData
