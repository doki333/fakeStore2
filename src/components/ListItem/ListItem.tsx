import React from 'react'
import styles from './listItem.module.scss'

interface IProps {
  listItem: IListData
}

const ListItem = ({ listItem }: IProps) => {
  // console.log(listItem)
  return (
    <li className={styles.listItem}>
      <div className={styles.imgWrapper}>
        <img src={listItem.image} alt={`item-${listItem.id}`} />
      </div>
      <dl>
        <dt>제품명</dt>
        <dd className={styles.itemTitle}>{listItem.title}</dd>
        <dt>가격</dt>
        <dd>{listItem.price}$</dd>
      </dl>
    </li>
  )
}

export default ListItem
