import { SetterOrUpdater } from 'recoil'

import { newStore } from 'services/sessionStore'
import { ICartData } from 'types/ListItem'

const handleItemCount = (itemProps: ICartData, itemCount: number, setCartList: SetterOrUpdater<ICartData[]>) => {
  if (itemProps.count + itemCount === 0) return
  const getCartStorage = newStore.get('myFSCart')

  const mappedData = getCartStorage.map((item: ICartData) =>
    item.key === itemProps.key ? { ...item, count: item.count + itemCount } : { ...item }
  )
  setCartList([...mappedData])
  newStore.set('myFSCart', [...mappedData])
}

export default handleItemCount
