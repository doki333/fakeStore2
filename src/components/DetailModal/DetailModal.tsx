import React, { MouseEvent, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { selectedModalItem } from 'recoil/cart.atom'
import useOnClickOutside from 'hooks/useClickOutside'

import styles from './detailModal.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Minus2Icon, Plus2Icon } from 'assets/svgs'
import ImageSlider from './ImageSlider/ImageSlider'
import DataList from 'components/DataList/DataList'

interface IModalProps {
  handleModalShow: () => void
  handleClickAdd: () => void
  handleClickClose: () => void
  handleClickCount: (e: MouseEvent<HTMLButtonElement>) => void
  count: number
}

const DetailModal = ({ handleModalShow, handleClickAdd, handleClickClose, handleClickCount, count }: IModalProps) => {
  const selectedItem = useRecoilValue(selectedModalItem)
  const modalRef = useRef(null)
  const dataArr = selectedItem && [
    { key: 'Title:', content: selectedItem.title },
    { key: 'Price:', content: selectedItem.price },
    { key: 'Category:', content: selectedItem.category.name },
    { key: 'Description:', content: selectedItem.description },
  ]

  useOnClickOutside(modalRef, handleModalShow)

  if (!selectedItem) return null
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalInner} ref={modalRef}>
        {selectedItem && <ImageSlider />}
        <div className={styles.modalInfoWrapper}>
          {dataArr && <DataList dataArr={dataArr} />}
          <div className={styles.infoBottom}>
            <table>
              <thead>
                <tr>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>총합</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedItem.title}</td>
                  <td>
                    <button type='button' data-keyword='minus' onClick={handleClickCount}>
                      <Minus2Icon />
                    </button>
                    <input type='number' readOnly value={count} />
                    <button type='button' data-keyword='plus' onClick={handleClickCount}>
                      <Plus2Icon />
                    </button>
                  </td>
                  <td>${(selectedItem.price * count).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.bottomBtns}>
              <button type='button' onClick={handleClickAdd}>
                Add To Cart
              </button>
              <button type='button' onClick={handleClickClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailModal
