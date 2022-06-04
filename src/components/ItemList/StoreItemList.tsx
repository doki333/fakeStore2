import { IStoreData } from 'types/ListItem'
import EachItem from './ListItem/EachItem'
import styles from './storeItemList.module.scss'

interface IProps {
  storedItem: IStoreData[]
}

const StoreItemList = ({ storedItem }: IProps) => {
  // eslint-disable-next-line no-console
  console.log(storedItem)
  return (
    <ul className={styles.itemListWrapper}>
      {storedItem &&
        storedItem.map((inStoreListitem) => (
          <EachItem key={`item-${inStoreListitem.id}`} itemProps={inStoreListitem} />
        ))}
    </ul>
  )
}

export default StoreItemList
