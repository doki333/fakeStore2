import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

import DummyMain from './MainPhotos'
import StoreItemList from 'components/ItemList/StoreItemList'
import Spinner from 'components/Spinner/Spinner'
import getMoreItemData from 'services/getMoreItemData'
import { IStoreData, ICateData } from 'types/ListItem'

import styles from './dummy.module.scss'

const categoryCode: ICateData = {
  clothes: 1,
  electronics: 2,
  furniture: 3,
  shoes: 4,
}

const Dummy = () => {
  const navigate = useNavigate()
  const { ref, inView } = useInView()
  const { category } = useParams()
  const cateId = category && Object.keys(categoryCode).includes(category) ? categoryCode[category] : null

  const { hasNextPage, isLoading, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<IStoreData[], Error>(
    ['bringAPIData', cateId],
    ({ pageParam = 0 }) => getMoreItemData({ pageParam, code: cateId, path: category }),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (_lastPage.length === 0) return undefined
        return pages.length * 20
      },
      onError: () => {
        toast.error('API 통신 실패!', {
          style: {
            background: '#F8D7DA',
            color: '#783b45',
          },
        })
      },
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      cacheTime: 0,
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
    if (category && !Object.keys(categoryCode).includes(category)) {
      navigate('/notFound')
    }
  }, [category, fetchNextPage, hasNextPage, inView, navigate])

  return (
    <>
      {isLoading && (
        <div className={styles.mainSpinner}>
          <Spinner />
        </div>
      )}
      {!cateId && !isLoading && <DummyMain />}
      <div className={styles.mainItemList}>
        {!cateId && !isLoading && <h1>All Products</h1>}
        {!isLoading && <h1>{category}</h1>}
        {data &&
          data.pages.map((initialItems, index) => {
            const randomKey = `itemList-${index}`
            return <StoreItemList key={`shopList-${randomKey}`} storedItem={initialItems} />
          })}
      </div>
      <div className={styles.loadingBlock} ref={ref}>
        {isFetchingNextPage && hasNextPage && <Spinner />}
        {data && !hasNextPage && 'Nothing more to load!'}
      </div>
      {!isLoading && (
        <button type='button' onClick={handleClickBtn} className={styles.scrollUpBtn}>
          <span />
        </button>
      )}
    </>
  )
}

export default Dummy
