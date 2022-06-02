import { atom } from 'recoil'

export const cartItemState = atom<boolean>({
  key: '#cartItemState',
  default: false,
})
