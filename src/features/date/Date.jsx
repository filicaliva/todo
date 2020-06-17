import React, { useEffect } from 'react'

import styles from './Date.module.css'

import { date, selectDate,selectFormatDate } from './DateSlicer'
import { useSelector, useDispatch } from 'react-redux'

export const Date = () => {
    const day = useSelector(selectDate)
    const format = useSelector(selectFormatDate)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(date())
    }, [dispatch])

    return (
        <section className={styles.date}>
            <h1 className={styles.date_header1}>{day}</h1>
    <h2 className={styles.date_header2}>{format}</h2>
        </section>
    )
}