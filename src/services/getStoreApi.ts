import axios from 'axios'

const getStoreApi = (cate: string | undefined) => {
  console.log(cate)
  axios.get('https://fakestoreapi.com/products/category/jewelery').then((res) => {
    return res.data
  })
}
// const getStoreApi = () =>
//   axios.get('https://fakestoreapi.com/products').then((res) => {
//     return res.data
//   })

export default getStoreApi
