import React from 'react'

export default function Menu( { id, title, price, img, desc } ) {
  return (
    <section>
     <div className='menu-item'>
      <img src={img} alt={title} className='photo'/>
      <article className='item-info'>
       <div className='header-info'>
        <h4>{title}</h4>
        <p className='price'>${price}</p>
       </div>
       <p className='item-text'>{desc}</p>
     </article>
     </div>
    </section>
  )
}
