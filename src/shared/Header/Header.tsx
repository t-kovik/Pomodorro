import React from 'react';
import {Logo} from "./Logo";
import {StatButton} from "./StatButton";
import styles from './header.scss'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo />
                <StatButton />
            </div>
        </header>
    )
}