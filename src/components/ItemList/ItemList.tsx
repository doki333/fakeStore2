import React from 'react'
import { IStoreData } from 'types/ListItem'
import ListItem from './ListItem/ListItem'
import styles from './itemList.module.scss'

interface IProps {
  itemData: IStoreData[]
  cateId: number | null
}

const ItemList = ({ itemData, cateId }: IProps) => {
  return (
    <>
      {!cateId && <h1>All Products</h1>}
      <ul className={styles.itemListWrapper}>
        {itemData.map((item) => (
          <ListItem key={`item-${item.id}`} itemProps={item} />
        ))}
      </ul>
    </>
  )
}

export default ItemList
