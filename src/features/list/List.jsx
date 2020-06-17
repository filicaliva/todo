import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectItem,
  add,
  setItem,
  selectList
} from './listSlice';
import styles from './List.module.css';
import { Item} from './Item/Item.jsx';


export const  List = () => {
  const item = useSelector(selectItem);
  const list = useSelector(selectList);
  const dispatch = useDispatch();


  return (
    <section className={styles.tasks}>
      <input 
      type="text" 
      id="item-text" 
      placeholder="Add a task..."
      className={styles.input_text}
      value={item}
      onChange={e => dispatch(setItem(e.target.value))}
      onKeyPress={(e) => dispatch(add(e.key))}
      />

      <ul className={styles.list}>
      {list.map(item => <Item key={item.id} {...item}/>)}

      </ul>
    </section>
    
  );
}
