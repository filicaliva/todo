import React from 'react'

import styles from './Date.module.css'

export const Date = () => {

    return(
        <section className={styles.date}>
            <h1 className={styles.date_header1}>Tuesday</h1>
            <h2 className={styles.date_header2}>June 17, 2020</h2>
        </section>
    )
}