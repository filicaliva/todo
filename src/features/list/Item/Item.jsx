import React from 'react'
import { useDispatch } from 'react-redux'

import bin from './symbol/bin.png'
import edit from './symbol/edit.svg'

import './checkbox.css'
import styles from './Item.module.css'

import { remove, setChecked, setEdit } from '../listSlice'

export const Item = ({ id, value, checked }) => {
    const dispatch = useDispatch()

    return (
        <li className={styles.item} >
            <div>
                <label>
                    <input
                        type="checkbox"
                        className="css-checkbox"
                        checked={checked}
                        onChange={() => { dispatch(setChecked(id)) }}
                    />
                    <i></i>
                </label>
                <span className={styles.item_text}>
                    {value}
                </span>

            </div>
            <div className={styles.item__controls}>
                <img
                    src={edit}
                    alt="correct"
                    className={`${styles.cursor} ${styles.edit}`}
                    onClick={() => dispatch(setEdit({id, value}))}
                />
                <img
                    src={bin}
                    alt="bin"
                    className={`${styles.cursor} ${styles.remove}`}
                    onClick={() => dispatch(remove(id))}
                />

            </div>
        </li>

    )
} 