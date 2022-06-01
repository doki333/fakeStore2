import React from 'react'
import { IStoreData } from 'types/ListItem'
import styles from './itemList.module.scss'
import ListItem from './ListItem/ListItem'

interface IProps {
  itemData: IStoreData[]
}

const ItemList = ({ itemData }: IProps) => {
  return (
    <ul className={styles.itemListWrapper}>
      {itemData.map((item) => (
        <ListItem key={`item-${item.id}`} itemProps={item} />
      ))}
    </ul>
  )
}

export default ItemList
