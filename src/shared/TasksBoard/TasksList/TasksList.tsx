import React from 'react';
import styles from './taskslist.scss'

interface IProps {
    children?: React.ReactNode;
}

export function TasksList({children}: IProps) {
    return (
        <ul className={styles.taskslist}>
            {children}
        </ul>
    );
}