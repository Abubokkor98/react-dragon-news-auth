import React from 'react'
import Header from '../Components/Header'
import LatestNews from '../Components/LatestNews'

export default function HomeLayout() {
  return (
    <div>
        {/* header */}
        <Header></Header>
        <section className='w-11/12 mx-auto'>
        <LatestNews></LatestNews>

        </section>
        {/* nav */}
        {/* main */}
    </div>
  )
}
