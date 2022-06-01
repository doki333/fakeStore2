import React from 'react'
import { IStoreData } from 'types/ListItem'
import styles from './listItem.module.scss'
import PLACEHOLDER from 'assets/no-image.jpg'

interface IProps {
  itemProps: IStoreData
}

const ListItem = ({ itemProps }: IProps) => {
  const isImgEmpty = itemProps.images[0].length === 0 || !itemProps.images[0].includes('https')
  return (
    <li className={styles.itemWrapper}>
      <div>
        <img src={isImgEmpty ? PLACEHOLDER : itemProps.images[0]} alt='item' width='300px' height='300px' />
      </div>
      <dl className={styles.titleBlock}>
        <dt>title</dt>
        <dd>{itemProps.title}</dd>
      </dl>
      <dl>
        <dt>price</dt>
        <dd>${itemProps.price}</dd>
      </dl>
    </li>
  )
}

export default ListItem
