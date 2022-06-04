import axios from 'axios'
import { QueryFunctionContext } from 'react-query'

interface IProps {
  pageParam: QueryFunctionContext
  code: number | null
}

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'

const getMoreItemData = async ({ pageParam, code }: IProps) => {
  const prevAddr = code === null && `/categories/${code}`
  const response = await axios
    .get(`${PROXY}${prevAddr}/products?offset=${pageParam}&limit=20`)
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res)
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
