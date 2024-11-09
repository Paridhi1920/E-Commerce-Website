import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import Login from './Login'
import SignUp from './SignUp'
import { setSearchTerm } from '../store/productSlice' 

function NavBar() {
    const products = useSelector((state) => state.cart.products)
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [search, setSearch] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const openSignUp = ()=>{
        setIsLogin(false)
        setIsModelOpen(true)
    }

    const openLogin = ()=>{
        setIsLogin(true)
        setIsModelOpen(true)
    }
    const handleSearch = (e)=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }
    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto  py-4 px-4 md:px-16 lg:px-24 flex justify-between items-center'>
                <div className='text-xl font-bold'>
                    <Link to='/'>QuickPick</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input type="text"
                            placeholder='Search'
                            className='w-full rounded border full px-4 py-2'
                            onChange={(e)=> setSearch(e.target.value)} />
                        <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to='/cart' className='relative'>
                        <FaShoppingCart className='text-xl' />
                        {products.length > 0 && (
                            <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>{products.length}</span>
                        )}
                    </Link>
                    <button className='hidden md:block' onClick={()=>setIsModelOpen(true)}>
                        Login | Sign Up
                    </button>
                    <button className='block md:hidden'>
                        <FaUser />
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to='/' className='hover:underline'>
                    Home
                </Link>
                <Link to='/shop' className='hover:underline'>
                    Shop
                </Link>
                <Link to='/' className='hover:underline'>
                    About
                </Link>
                <Link to='/' className='hover:underline'>
                    Contact
                </Link>
            </div>
            <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} > 
                {isLogin ? <Login openSignUp={openSignUp}/> : <SignUp openLogin={openLogin}/>}
            </Modal>
        </nav>
    )
}

export default NavBar
