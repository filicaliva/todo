import React from 'react'
import { useDispatch } from 'react-redux'

import bin from './symbol/bin.png'

import './checkbox.css'
import styles from './Item.module.css'

import { remove, setChecked } from '../listSlice'

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
            <img
                src={bin}
                alt="bin"
                className={styles.item_bin}
                onClick={() => dispatch(remove(id))}
            />
        </li>

    )
} 