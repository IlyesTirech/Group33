import React, {Component} from 'react'
import Product from './Product'
import {ProductConsumer} from '../context'
import Modal from './Modal'
export default class Mens extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                        <ProductConsumer>
    {value=>{
        return value.products.map(product=>{
            return <Product key={product.id} product={product} />
        })
    }}
</ProductConsumer>
                        </div>
                    </div>
                </div>
                <Modal/>
</React.Fragment>

        )
    }
}

