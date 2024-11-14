import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function CategoryNews() {
    const {data} = useLoaderData();
    console.log(data);


  return (
    <div>
        <h2>{data.length} News found in this category</h2>
    </div>
  )
}
