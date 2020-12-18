
import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import Modal from './Modal'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
              {
                  value => {
                      const {id,company,img,info,price,title,inCart} = value.detailProduct
                  
                
                return(
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center my-5">
                                <h1>{title}</h1>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capatalize">
<img src={img} className="img-fluid" alt={title}/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capatalize">
                                    <h2>Model:{title}</h2>
                                    <h4 className="text-uppercase  mt-3 mb-2">
                                        Made By :  <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4><strong>Price: <span>£</span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Product Info
                                    </p>
                                    <p className="lead">
                                        {info}
                                    </p>
                                    <div>
                                        <Link to='/mens'>
                                            <button>Back To Product</button>
                                        </Link>
                                        <button 
                                        
                                        disabled={inCart ? true: false } 
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                         }}
                                        >
                                            {inCart?'inCart' : "Add To Cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal/>
                    </div>
                   
                )
                
                }}
              
            </ProductConsumer>
            

        )

            }
           
        }
