export interface IStoreData {
  category: {
    id: number
    image: string
    name: string
  }
  description: string
  id: number
  images: string[]
  length: number
  price: number
  title: string
}

export interface ICateData {
  clothes: number
  electronics: number
  furniture: number
  shoes: number
  others: number
  [key: string]: number
}
