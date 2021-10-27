import React from 'react'
import img from '../images/logo.webp'
import '../App.css';
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { BsFillBagFill } from "react-icons/bs";


const Nav = () => {
    const {TotalQuantity} = useSelector(state => state.CartReducer)
    return (
        <>
            <div className="navbar nav">
                <div className="container">
                    <div className="nav__container">
                        <div className="nav__left">
                            <Link to="/" >
                                <img src={img} alt="logo" />
                            </Link>
                        </div>
                        <div className="nav__right">
                            <Link to="/cart">
                                <div className="basket">
                                    <BsFillBagFill className="cart-icon" />
                                    <span>{TotalQuantity}</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Nav
