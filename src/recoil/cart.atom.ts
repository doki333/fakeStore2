import { atom } from 'recoil'
import { IStoreData } from 'types/ListItem'

export const cartItemState = atom<boolean>({
  key: '#cartItemState',
  default: false,
})

export const selectedModalItem = atom<null | IStoreData>({
  key: '#selectedModalItem',
  default: null,
})
