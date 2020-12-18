import React, { Component } from 'react'

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                   <div className="col-10 mx-auto text-center">
                       <h2>Your Cart Is Currently Empty</h2>
                   </div>
    

                </div>
            </div>
        )
    }
}
