import { IStoreData } from 'types/ListItem'
import EachItem from './ListItem/EachItem'
import styles from './storeItemList.module.scss'

interface IProps {
  storeItemData: IStoreData[]
}

const StoreItemList = ({ storeItemData }: IProps) => {
  return (
    <ul className={styles.itemListWrapper}>
      {storeItemData && storeItemData.map((item) => <EachItem key={`item-${item.id}`} itemProps={item} />)}
    </ul>
  )
}

export default StoreItemList
