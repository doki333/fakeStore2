import ListItem from 'components/ListItem/ListItem'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-use'
import getStoreApi from 'services/getStoreApi'
import styles from './dummy.module.scss'

const Dummy = () => {
  const { category } = useParams()
  console.log(category)
  const { data } = useQuery(['bringStoreInfo', category], () => getStoreApi(category))
  console.log(data)

  return (
    <ul className={styles.shopContents}>
      {/* {data && data.map((d: IListData) => <ListItem key={`dummy-${d.id}`} listItem={d} />)} */}
    </ul>
  )
}
export default Dummy
