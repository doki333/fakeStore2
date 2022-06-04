import axios from 'axios'
import { QueryFunctionContext } from 'react-query'

interface IProps {
  pageParam: QueryFunctionContext
  code: number | null
  path: string | undefined | null
}

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'

const getMoreItemData = async ({ pageParam, code, path }: IProps) => {
  if (code === null) return undefined

  const prevAddr = path === 'all' && code !== null ? '/products' : `/categories/${code}/products`
  const response = await axios
    .get(`${PROXY}${prevAddr}?offset=${pageParam}&limit=20`)
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
