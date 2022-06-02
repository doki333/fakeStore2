import engine from 'store/src/store-engine'
import storage from 'store/storages/sessionStorage'
import { ICartData, IStoreData } from 'types/ListItem'

const newStore = engine.createStore([storage])

const handleClickItemAdd = (itemProps: IStoreData, itemCount: number) => {
  // const initialArr = []
  const isImgEmpty = itemProps.images[0].length === 0 || !itemProps.images[0].includes('https')
  const itemObj = {
    key: itemProps.id,
    name: itemProps.title,
    image: isImgEmpty ? '' : itemProps.images[0],
    count: itemCount,
    price: itemProps.price,
  }

  const getCartStorage = newStore.get('myFSCart') ?? []

  if (!getCartStorage) {
    newStore.set('myFSCart', [itemObj])
    return
  }

  const storedItemIndex = getCartStorage.findIndex((item: ICartData) => item.key === itemProps.id)

  if (storedItemIndex === -1) {
    newStore.set('myFSCart', [...getCartStorage, itemObj])
    return
  }
  const newData = {
    ...getCartStorage[storedItemIndex],
    count: getCartStorage[storedItemIndex].count + itemCount,
  }
  getCartStorage.splice(storedItemIndex, 1)
  newStore.set('myFSCart', [newData, ...getCartStorage])
}

export default handleClickItemAdd
