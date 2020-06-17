import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount
} from './listSlice';
import styles from './List.module.css';
import { Item } from './Item/Item.jsx';


export const  List = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <section className={styles.tasks}>
      <input 
      type="text" 
      id="item-text" 
      placeholder="Add a task..."
      className={styles.input_text}
      />

      <ul className={styles.list}>
      <Item/>

      </ul>
    </section>
    
  );
}
