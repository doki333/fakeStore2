import { ChangeEvent, useMemo, useState } from 'react'
import CartItem from './CartItem'

import { newStore } from 'services/sessionStore'
import { ICartData } from 'types/ListItem'

import styles from './cart.module.scss'

function getTotalCost(d: ICartData[]) {
  const checkedData = d.filter((data: ICartData) => data.checked === true)
  return checkedData.reduce((prev: number, next: ICartData) => prev + next.count * next.price, 0)
}

const Cart = () => {
  const getSessionData = newStore.get('myFSCart') ?? []
  const isNothing = !getSessionData || getSessionData.length === 0

  const [dataList, setDataList] = useState(getSessionData)
  const totalCost = useMemo(() => getTotalCost(dataList), [dataList])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.currentTarget.dataset
    const newData = dataList.map((data: ICartData) =>
      data.key === Number(id) ? { ...data, checked: !data.checked } : { ...data }
    )
    setDataList(newData)
    newStore.set('myFSCart', newData)
  }

  return (
    <div className={styles.cartWrapper}>
      {isNothing && <p>Nothing! Add Something</p>}
      {dataList && (
        <ul className={styles.cItemList}>
          {dataList.map((cartItem: ICartData) => (
            <CartItem
              key={`cart-${cartItem.key}`}
              cartItem={cartItem}
              handleChange={handleChange}
              setDataList={setDataList}
            />
          ))}
        </ul>
      )}
      {dataList.length !== 0 && (
        <>
          <ul className={styles.costBottom}>
            <dl>
              <dt>Sub Total</dt>
              <dd>${totalCost.toLocaleString()}.00</dd>
            </dl>
            <dl>
              <dt>Shipping</dt>
              <dd>$20.00</dd>
            </dl>
            <dl>
              <dt>Total</dt>
              <dd>${(totalCost + 20).toLocaleString()}.00</dd>
            </dl>
          </ul>
          <p className={styles.checkOut}>LOGIN TO CHECKOUT</p>
        </>
      )}
    </div>
  )
}
export default Cart
