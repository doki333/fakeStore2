import { MouseEvent } from 'react'
import ReactDOM from 'react-dom'
import DetailModal from './DetailModal'

interface IModalProps {
  handleModalShow: () => void
  handleClickAdd: () => void
  handleClickClose: () => void
  handleClickCount: (e: MouseEvent<HTMLButtonElement>) => void
  count: number
}

const Portal = ({ handleModalShow, handleClickAdd, handleClickClose, handleClickCount, count }: IModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <DetailModal
          handleModalShow={handleModalShow}
          handleClickAdd={handleClickAdd}
          handleClickClose={handleClickClose}
          handleClickCount={handleClickCount}
          count={count}
        />,
        document.querySelector('#portal') as HTMLDivElement
      )}
    </>
  )
}

export default Portal
