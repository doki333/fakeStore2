import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'
import { useParams } from 'react-router-dom'

import ItemList from 'components/ItemList/ItemList'
import Spinner from 'components/Spinner/Spinner'
import getMoreItemData from 'services/getMoreItemData'
import { IStoreData, ICateData } from 'types/ListItem'

import styles from './dummy.module.scss'
import DummyMain from './DummyMain'

const categoryCode: ICateData = {
  clothes: 1,
  electronics: 2,
  furniture: 3,
  shoes: 4,
}

const Dummy = () => {
  const { ref, inView } = useInView()
  const { category } = useParams()
  const cateId = category ? categoryCode[category] : null

  const { hasNextPage, isLoading, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<IStoreData[], Error>(
    ['#getMoreStoreItems', cateId],
    ({ pageParam = 0 }) => getMoreItemData({ pageParam, code: cateId }),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (_lastPage.length === 0) return undefined
        return pages.length * 20
      },
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
    })
  }

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, inView])

  return (
    <>
      {isLoading && <Spinner />}
      {!cateId && !isLoading && <DummyMain />}
      <div className={styles.mainItemList}>
        {!cateId && !isLoading && <h1>All Products</h1>}
        {data &&
          data.pages.map((d, index) => {
            const randomKey = index * Math.random()
            return <ItemList key={`shopList-${randomKey}`} itemData={d} />
          })}
      </div>
      {data && (
        <div className={styles.loadingBlock} ref={ref}>
          {isFetchingNextPage && hasNextPage ? <Spinner /> : 'Nothing more to load!'}
        </div>
      )}
      {!hasNextPage && !isLoading && !isFetchingNextPage && (
        <button type='button' onClick={handleClickBtn} className={styles.scrollUpBtn}>
          <span />
        </button>
      )}
    </>
  )
}

export default Dummy
