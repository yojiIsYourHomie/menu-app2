import React, { useState } from 'react';
import './App.css';
import Categories from './Categories';
import Menu from './Menu';
import items from './data'

const allCategories = ['all',...new Set(items.map(item => item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)



  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items)
      return;
    }
    const newList = items.filter(item => item.category === category)
    setMenuItems(newList)
  }



  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
        </div>
        <nav><Categories categories={categories} filterItems={filterItems}/></nav>
        <div className='section-center'>{menuItems.map(item => {
        return <Menu key={item.id} {...item} />
      })}</div>
      </section>
    </main>
  );
}

export default App;
