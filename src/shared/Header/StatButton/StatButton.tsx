import React from 'react';
import styles from './statbutton.scss'
import {Icon} from "../../Icon";

export function StatButton() {
    return (
        <button className={styles.statbutton}>
            <Icon name={'equal'} className={styles.statbutton__icon} size={24}/>
            Статистика
        </button>
    )
}