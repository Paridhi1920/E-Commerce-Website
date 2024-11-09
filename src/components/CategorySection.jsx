import React from 'react'
import kids from '../images/kid.png'
import man from '../images/man.png'
import woman from '../images/woman.png'
function CategorySection() {
  const imgs = [
    {
      title: "Men",
      imageUrl: man,
    },
    {
      title: "Women",
      imageUrl: woman,
    },
    {
      title: "Kids",
      imageUrl: kids,
    }
  ]
  
  return (
    <div className='bg-white grid grid-cols-1 sm:grid-cols-3 gap-3  mx-auto container '>
      {imgs.map((category, index) => (
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={category.imageUrl} alt="" className='w-full h-full object-cover shadow-md rounded-lg' />
          <div className='absolute top-20 left-12'>
            <p className='font-bold text-xl'>{category.title}</p>
            <p className='text-sm text-gray-600'>View All</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
