/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react'

function Price() {
    return (
        <div id='price'>
            <h1>SUBSCRIPTION</h1>
            <selection className="pricing" id="pricing">
                <div className="information">
                    <span>Pricing Plan</span>
                    <h3>Affotable Pricing Plan For Your</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, ad saepe voluptatibus quod eveniet fugiat. Quidem aperiam eius tempore debitis!</p>
                    <p><i className="fas fa-check"></i> Cardio Excacise</p>
                    <p><i className="fas fa-check"></i> Wait Lifting</p>
                    <p><i className="fas fa-check"></i> Diet Plan</p>
                    <p><i className="fas fa-check"></i>Overall Results</p>
                    <a href="#" className='btn'>All Pricing</a>
                </div>
                <div className="plan basic">
                    <h3>Besic Plan</h3>
                    <div className="price"> <span>$</span>30 <span>/mo</span> </div>
                    <div className="list">
                       
                        <p><i className="fas fa-check"></i> Cardio Excacise</p>
                        <p><i className="fas fa-check"></i> Wait Lifting</p>
                        <p><i className="fas fa-check"></i> Diet Plan</p>
                        <p><i className="fas fa-check"></i>Overall Results</p>
                    </div>
                    <a href="#" className='btn'>Got Started</a>
                </div>
                <div className="plan">
                    <h3>Primiam Plan</h3>
                    <div className="price"> <span>$</span>60 <span>/mo</span> </div>
                    <div className="list">
                        <p><i className="fas fa-check"></i> Personal Traning</p>
                        <p><i className="fas fa-check"></i> Cardio Excacise</p>
                        <p><i className="fas fa-check"></i> Wait Lifting</p>
                        <p><i className="fas fa-check"></i> Diet Plan</p>
                        <p><i className="fas fa-check"></i>Overall Results</p>
                    </div>
                    <a href="#" className='btn'>Got Started</a>
                </div>
            </selection>
        </div>
    )
}

export default Price
