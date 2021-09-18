import React from 'react';
import styles from './logo.scss'
import {Icon} from "../../Icon";

export function Logo() {
    return (
        <a href="#" className={styles.logo}>
            <Icon name={'tomato'} size={40} className={styles.logo__icon} />
            pomodoro_box
        </a>
    )
}