import React from 'react';
import {Icon} from "../../../../Icon";
import styles from './taskmenuitem.scss'

interface IProps {
    icon: string,
    text: string,
    onClick?: () => void
}

export function TaskMenuItem(props: IProps) {
    return (
          <li className={styles.item} onClick={props.onClick}>
              <Icon name={props.icon} size={18} />
              <button className={styles.btn}>{props.text}</button>
          </li>
    )
}