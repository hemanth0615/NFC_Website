import React from 'react';
import "./productsCust.css";

const ProdCustToggle = () => {
  return (
    <>
    <div className='prod-cust-div'>
      <div className='prod-btn-div'>
        <button className='prod-btn'></button>
        <a >OUR PRODUCTS</a> 
      </div>
      <div className='cust-btn-div'>
        <button className='cust-btn'></button>
        <a > OUR CUSTOMERS</a>
      </div>
    </div>
    </>
  )
}

export default ProdCustToggle