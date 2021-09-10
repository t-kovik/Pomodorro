import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './header.scss'

function HeaderComponent() {
    return(
        <header>
            <h1 className={styles.ex}>Pomodorro7</h1>
            <p>
                hello4
            </p>
        </header>
    )
}

export const Header = hot(HeaderComponent);