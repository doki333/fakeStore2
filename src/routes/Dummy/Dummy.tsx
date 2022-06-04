import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

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
  all: 5,
}

const Dummy = () => {
  const navigate = useNavigate()
  const { ref, inView } = useInView()
  const { category } = useParams()
  const cateId = category && Object.keys(categoryCode).includes(category) ? categoryCode[category] : null

  const { hasNextPage, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<IStoreData[], Error>(
    ['bringAPIData', cateId],
    ({ pageParam = 0 }) => getMoreItemData({ pageParam, code: cateId, path: category }),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages && _lastPage.length === 0) return undefined
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
      suspense: true,
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
    if (data && cateId === null) navigate('/notFound')
  }, [cateId, category, data, fetchNextPage, hasNextPage, inView, navigate])

  return (
    <>
      <div className={styles.mainItemList}>
        <h1>{category}</h1>
        {data &&
          data.pages.map((initialItems, index) => {
            const randomKey = `itemList-${index}`
            return <StoreItemList key={`shopList-${randomKey}`} storedItem={initialItems} />
          })}
      </div>
      <div className={styles.loadingBlock} ref={ref}>
        {isFetchingNextPage && hasNextPage && (
          <div className={styles.mainSpinner}>
            <Spinner />
          </div>
        )}
        {data && !hasNextPage && 'Nothing more to load!'}
      </div>
      <button type='button' onClick={handleClickBtn} className={styles.scrollUpBtn}>
        <span />
      </button>
    </>
  )
}

export default Dummy
