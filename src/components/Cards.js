import React from 'react'
import Cardsdata from './Cardsdata'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../redux';

function Cards() {
    const dispatch = useDispatch();
    return (
        <div className='max-w-full'>
            <h1 className='text-center font-extrabold text-3xl my-10'>Add to Cart Projects</h1>
            <div className='px-4 md:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row md:grid-rows-3 gap-5 justify-center justify-items-center'>
                {Cardsdata && Cardsdata.map((element, id) => {
                    return (
                        <div key={id} className='w-full h-96 p-4 hover:shadow-lg hover:shadow-light-500 rounded-md grid grid-flow-row'>
                            <img alt="foodImage" className='h-60 w-full' src={element.imgdata} height={200} width={400}/>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xl'>{element.rname}</p>
                                <p>Price : ₹ {element.price}</p>
                                <div className=' rounded-md flex justify-center items-center text-white w-full bg-blue-500 hover:bg-blue-800'>
                                    <button onClick={()=>dispatch(ADD_TO_CART(element))} className='h-10 text-xl'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Cards