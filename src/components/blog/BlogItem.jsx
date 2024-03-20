import React from 'react'
import './BlogItem.scss'
import blogImg from '../../assets/images/hero.jpg'
const BlogItem = () => {
  return (
    <div className='blog__item'>
        <div className="blog__img">
            <img src={blogImg} alt="blog__img-item" />
        </div>
        <div className="blog__info">
            <h4 className='blog__title'>DSADAEWQ</h4>
            <p className='blog__short-info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, saepe!</p>
            <button className='blog__button'>Дізнатись більше</button>
        </div>
    </div>
  )
}

export default BlogItem