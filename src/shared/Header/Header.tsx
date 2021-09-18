import React from 'react';
import styles from './header.scss'
import {Logo} from "./Logo";
import {StatButton} from "./StatButton";

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