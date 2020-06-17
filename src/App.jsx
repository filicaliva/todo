import React from 'react';
import { List } from './features/list/List.jsx';
import { Date } from './features/date/Date'
import styles from './App.module.css';

function App() {
  return (
      <section className={styles.container}>
        <Date />
        <List />
      </section>

  )
}

export default App;
