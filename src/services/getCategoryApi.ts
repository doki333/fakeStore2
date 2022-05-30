import axios from 'axios'

const getCategoryApi = (category: string | undefined) => {
  if (!category) return
  const categoryString =
    category &&
    {
      men: 'men&#39;s clothing',
      women: 'women&#39;s clothing',
      jewelery: 'jewelery',
      electronics: 'electronics',
    }[category]

  console.log(categoryString)

  axios.get('https://fakestoreapi.com/products/category/jewelery').then((res) => {
    console.log(res.data)
    return res.data
  })
}

export default getCategoryApi
