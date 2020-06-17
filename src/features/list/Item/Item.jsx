import React from 'react'

import bin from './symbol/bin.png'

import './checkbox.css'
import styles from './Item.module.css'
export const Item = () => {
    return (
        <li className={styles.item}>
            <div>
                <label>
                    <input type="checkbox" class="css-checkbox" />
                    <i></i>
                </label>
            <input
                id="1"
                type='text'
                className={styles.item_text}
                value='Buy bread' />
            </div>
            <img src={bin} alt="bin" className={styles.item_bin} />
        </li>

    )
} 