import React from 'react'

import styles from './Loader.module.scss'

export const Loader = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader} />
            {children && <div className={styles.loaderText}>{children}</div>}
        </div>
    )
}