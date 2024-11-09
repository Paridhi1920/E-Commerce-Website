import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Checkout({ setOrder }) {
    const [billToggle, setBillToggle] = useState(true)
    const [shipToggle, setShipToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(false)
    const [payment, setPayment] = useState("cod")
    const cart = useSelector((state) => state.cart)
    const [shipInfo, setShipInfo] = useState({
        address: "",
        city: "",
        pin: "",
    })
    const navigate = useNavigate()
    const handleOrder = () => {
        const newOrder = {
            products: cart.products,
            orderNumber: Math.floor(100000 + Math.random() * 900000),
            shipInformation: shipInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirm')
    }


    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>

                    {/* Billing Information */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between'
                            onClick={() => setBillToggle(!billToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        <div className={`space-y-4 ${billToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Name</label>
                                <input type="text" name='name' placeholder='Enter Name'
                                    className='w-full px-3 py-2 border'
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input type="email"
                                    name='email'
                                    placeholder='Enter email'
                                    className='w-full px-3 py-2 border'
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Phone</label>
                                <input type="text"
                                    name='phone'
                                    placeholder='Enter Phone Number'
                                    className='w-full px-3 py-2 border'
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Shipping Informtion  */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between'
                            onClick={() => setShipToggle(!shipToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shipToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        <div className={`space-y-4 ${shipToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Address</label>
                                <input type="text" name='address' placeholder='Enter Address'
                                    className='w-full px-3 py-2 border'
                                    required
                                    onChange={(e) => setShipInfo({ ...shipInfo, address: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>City</label>
                                <input type="text"
                                    name='city'
                                    placeholder='Enter City Name'
                                    className='w-full px-3 py-2 border'
                                    required
                                    onChange={(e) => setShipInfo({ ...shipInfo, city: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>PIN Code</label>
                                <input type="text"
                                    name='pin'
                                    placeholder='Enter Pin Code'
                                    className='w-full px-3 py-2 border'
                                    required
                                    onChange={(e) => setShipInfo({ ...shipInfo, pin: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between'
                            onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input type="radio" name='payment'
                                    checked={payment === 'cod'}
                                    onChange={() => setPayment("cod")} />
                                <label className='block text-gray-700 ml-2'>Cash On Delivery</label>
                            </div>

                            <div className='flex items-center mb-2'>
                                <input type="radio" name='payment'
                                    checked={payment === 'dc'}
                                    onChange={() => setPayment("dc")} />
                                <label className='block text-gray-700 ml-2'>Debit Card</label>
                            </div>
                            {payment === 'dc' && (
                                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>Debit Card Informtion</h3>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                        <input type="text" placeholder='Enter Card Number'
                                            className='border p-2 w-full rounded'
                                            required />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                                        <input type="text"
                                            placeholder='Enter Card holder name'
                                            className='border p-2 w-full rounded'
                                            required />
                                    </div>
                                    <div className='flex justify-between mb-4'>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>Expiry Date</label>
                                            <input type="text"
                                                placeholder='MM/YY'
                                                className='border p-2 w-full rounded'
                                                required />
                                        </div>
                                        <div className='w-1/2 ml-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>CVV </label>
                                            <input type="text"
                                                placeholder='CVV'
                                                className='border p-2 w-full rounded'
                                                required />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className='w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                        {cart.products.map((product) => (
                            <div key={product.id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded'
                                    />
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{product.name}</h4>
                                        <p className='text-gray-600'>₹ {product.price} x {product.quantity}</p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>
                                    ₹{product.price * product.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price:</span>
                            <span className='font-semibold'>₹ {cart.totalPrice.toFixed()}</span>
                        </div>
                    </div>
                    <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
                        onClick={handleOrder}>Place order</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
