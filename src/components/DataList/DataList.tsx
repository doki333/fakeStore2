import React from 'react'
import { cx } from 'styles'
import { IUListData } from 'types/ListItem'
import styles from './dataList.module.scss'

interface IDataProps {
  dataArr: IUListData[]
  classTitle?: string
}

const DataList = ({ dataArr, classTitle }: IDataProps) => {
  return (
    <ul className={classTitle && cx(styles[classTitle])}>
      {dataArr.map((infoList) => (
        <dl key={`infoList-${infoList.key}`}>
          <dt>{infoList.key}</dt>
          <dd>{infoList.content}</dd>
        </dl>
      ))}
    </ul>
  )
}

export default DataList
