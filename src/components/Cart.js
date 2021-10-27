import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import currencyFormatter from 'currency-formatter'
import { BsDash, BsPlus} from 'react-icons/bs'
import {AiTwotoneDelete } from 'react-icons/ai'


const Cart = () => {

    const { products,TotalPrice,TotalQuantity } = useSelector(state => state.CartReducer);
    console.log(products);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="container">
                <h3>Your Cart</h3>
                {/* {products.length > 0 ? "you have a products" : "your cart is empty"} */}

                {products.length > 0 ? <>

                    <div className="row">
                        <div className="col-9">
                            <div className="cart__heading">
                                <div className="row">
                                    <div className="col-2">Picture</div>
                                    <div className="col-2">Name</div>
                                    <div className="col-2">Price</div>
                                    <div className="col-2">Inc-Dec</div>
                                    <div className="col-2">Total Price</div>
                                    <div className="col-2">Remove</div>
                                </div>
                            </div>
                            {products.map(product => (
                                <div className="row verticalAlign" key={product.id}>
                                    <div className="col-2">
                                        <div className="cart__image">
                                            <img src={require(`../images/${product.image}`).default} alt='' />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__name">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__price">
                                            {currencyFormatter.format(product.discountprice, { code: 'USD' })}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="details__info cart__incDec">
                                            <div className="details__incDec">
                                                <span className="dec" onClick={()=>{dispatch({type:"DEC", payload:product.id})}}><BsDash /></span>
                                                <span className="quantity">{product.quantity}</span>
                                                <span className="inc" onClick={()=>{dispatch({type:"INC", payload:product.id})}}><BsPlus /></span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__total text-center">
                                            {currencyFormatter.format(product.discountprice * product.quantity,{code:'USD'})}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__remove" onClick={()=>dispatch({type:"REMOVE", payload:product.id})}>
                                            <AiTwotoneDelete />
                                        </div>  
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-3 summary-col">
                            <div className="summary">
                                <div className="summary__heading">
                                    summary
                                </div>
                                <div className="summary__details">
                                    <div className="row">
                                        <div className='col-6'>
                                            Total Items :
                                        </div>
                                        <div className="col-6">
                                            {TotalQuantity}
                                        </div>
                                    </div>
                                    <div className="row mb-10">
                                        <div className='col-6'>
                                            Total Price :
                                        </div>
                                        <div className="col-6">
                                            {currencyFormatter.format(TotalPrice, {code:"USD"})}
                                        </div>
                                    </div>
                                    <button type="button" className="checkout">ChekOut</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </> : "your cart is empty"}
            </div>
        </div>
    )
}

export default Cart
