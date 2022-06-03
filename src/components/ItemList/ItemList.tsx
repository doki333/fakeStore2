import { IStoreData } from 'types/ListItem'
import ListItem from './ListItem/ListItem'
import styles from './itemList.module.scss'

interface IProps {
  storeItemData: IStoreData[]
}

const ItemList = ({ storeItemData }: IProps) => {
  return (
    <ul className={styles.itemListWrapper}>
      {storeItemData.map((item) => (
        <ListItem key={`item-${item.id}`} itemProps={item} />
      ))}
    </ul>
  )
}

export default ItemList
