import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function LeftNavbar() {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])


  return (
    <div>
        <h1 className='font-semibold mb-3'>All Category {categories.length}</h1>
        <div className='flex flex-col gap-2'>
            {
                categories.map(category=> <NavLink to={`/category/${category.category_id}`} className='btn bg-base-100 border-none' key={category.category_id}>{category.category_name}</NavLink>)
            }
        </div>
    </div>
  )
}
