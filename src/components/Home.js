import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import currencyFormatter from 'currency-formatter'


const Home = () => {

    const { products } = useSelector(state =>
        state.ProductsReducer
    );
    console.log({ products });

    return (
        <div>
            <Header />
            <div className="container mtb-30">
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={`details/${product.id}`} >
                                    <img src={require(`../images/${product.image}`).default} alt='pic' />
                                    </Link>
                                </div>
                                <div className="product__name">
                                    {product.name}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price">
                                            <span className="actualPrice">
                                            {currencyFormatter.format(product.price, { code: 'USD' })}</span>
                                            <span className="discount">
                                                {product.discount}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product__discount__price">

                                            {currencyFormatter.format(product.discountprice, { code: 'USD' })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Home;
