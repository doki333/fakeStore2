import { SetterOrUpdater } from 'recoil'

import { newStore } from 'services/sessionStore'
import { ICartData } from 'types/ListItem'

export const handleItemCount = (itemProps: ICartData, itemCount: number, setCartList: SetterOrUpdater<ICartData[]>) => {
  if (itemProps.count + itemCount === 0) return
  const getCartStorage = newStore.get('myFSCart')

  const mappedData = getCartStorage.map((mappingItem: ICartData) =>
    mappingItem.key === itemProps.key ? { ...mappingItem, count: mappingItem.count + itemCount } : { ...mappingItem }
  )
  setCartList([...mappedData])
  newStore.set('myFSCart', [...mappedData])
}

export function getTotalCost(d: ICartData[]) {
  const checkedData = d.filter((data: ICartData) => data.checked === true)
  return checkedData.reduce((prev: number, next: ICartData) => prev + next.count * next.price, 0)
}
