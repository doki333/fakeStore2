import ItemList from 'components/ItemList/ItemList'
import ListItem from 'components/ItemList/ListItem/ListItem'
import { axios } from 'hooks/worker'
import React, { useCallback, useEffect } from 'react'
import { QueryFunctionContext, useInfiniteQuery, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-use'
import getMoreData from 'services/getMoreData'
import { IStoreData } from 'types/ListItem'
import styles from './dummy.module.scss'
import { useInView } from 'react-intersection-observer'
import Spinner from 'components/Spinner/Spinner'

const Dummy = () => {
  const { ref, inView } = useInView()
  // const { category } = useParams()
  const {
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    isFetching,
    isError,
    data,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<IStoreData[], Error>(['#getMoreStoreItems'], getMoreData, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length === 11) {
        return undefined
      }

      return pages.length * 20
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  return (
    <>
      {isLoading && <Spinner />}
      <div>
        {data &&
          data.pages &&
          data.pages.map((d, index) => <ItemList key={`shopList-${index * Math.random()}`} itemData={d} />)}
      </div>
      {data && <div ref={ref}>{isFetchingNextPage ? <Spinner /> : 'Nothing more to load!'}</div>}
    </>
  )
}

export default Dummy
