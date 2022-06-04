import { SetterOrUpdater } from 'recoil'
import { newStore } from 'services/sessionStore'
import { ICartData, IStoreData } from 'types/ListItem'

const handleClickItemAdd = (itemProps: IStoreData, itemCount: number, setCartList: SetterOrUpdater<boolean>) => {
  const isImgEmpty = itemProps.images[0].length === 0 || !itemProps.images[0].includes('https')
  const itemObj = {
    key: itemProps.id,
    name: itemProps.title,
    image: isImgEmpty ? '' : itemProps.images[0],
    count: itemCount,
    price: itemProps.price,
    checked: true,
  }

  const getCartStorage = newStore.get('myFSCart') ?? []

  if (!getCartStorage) {
    setCartList(true)
    newStore.set('myFSCart', [itemObj])
    return
  }

  const storedItemIndex = getCartStorage.findIndex((idxItem: ICartData) => idxItem.key === itemProps.id)

  if (storedItemIndex === -1) {
    setCartList(true)
    newStore.set('myFSCart', [...getCartStorage, itemObj])
    return
  }

  const mappedData = getCartStorage.map((eachItems: ICartData) =>
    eachItems.key === itemProps.id ? { ...eachItems, count: eachItems.count + itemCount } : { ...eachItems }
  )

  setCartList(true)
  newStore.set('myFSCart', [...mappedData])
}

export default handleClickItemAdd
