import React, {useEffect, useState} from 'react';
import styles from './taskitem.scss'
import {TaskItemContent} from "./TaskItemContent";
import {TaskMenuList} from "./TaskMenuList";
import {Icon} from "../../Icon";

interface IProps {
    content: string,
    id: string,
    i: number
}

export function TaskItem(props: IProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={styles.item}>
            <TaskItemContent id={props.id} index={props.i} content={props.content} />
            {isOpen && <TaskMenuList id={props.id} i={props.i} />}
            <button className={`${styles.menu} menu`} onClick={(e) => {setIsOpen(!isOpen)}}><Icon name={'menu'} size={18}/></button>
        </li>
    )
}