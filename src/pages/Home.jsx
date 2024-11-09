import React, { useEffect } from 'react'
import { Category } from '../components/Data'
import bgImage from '../images/bgImage.avif'
import CategorySection from '../components/CategorySection'
import { setProducts } from '../store/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { mockData } from '../components/Data'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'
import { useNavigate } from 'react-router-dom'

function Home() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const products = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(setProducts(mockData))
    }, [])

    return (
        <div>
            <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
                <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>

                    <div className='w-full md:w-3/12'>
                        <div className='bg-red-600 text-white text-bold px-2 py-2.5'>Shop By Category</div>
                        <ul className='space-y-4 bg-gray-50 border px-2 py-2'>
                            {Category.map((category, index) => (
                                <li key={index} 
                                className='flex items-center text-sm font-medium hover:underline'
                                onClick={()=> navigate(`/category/${category.toLowerCase()}`)} >
                                    <div className='w-2 h-2 border  border-red-500 rounded-full mr-2 '></div>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-full md:w-9/12 mt-8 md:mt-0 relative h-96'>
                        <img src={bgImage} alt="" className='h-full w-full' />
                        <div className='absolute top-16 left-8'>
                            <h2 className='text-3xl font-bold'>Welcome to QuickPick</h2>
                            <p className='text-xl mt-2.5 font-bold text-gray-800'>MILLIONS OF PRODUCTS </p>
                            <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105' onClick={() => navigate('/shop')}>Shop Now</button>
                        </div>
                    </div>

                </div>
                <CategorySection />

                <div className='container mx-auto py-12'>
                    <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                        {products.products.slice(0, 5).map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>
            <Shop />
        </div>
    )
}

export default Home
