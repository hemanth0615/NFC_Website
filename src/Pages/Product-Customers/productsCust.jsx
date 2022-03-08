import React, { useState } from 'react'
import "./productsCust.css";
import productsData from './prodCard1Data';
import custData from './custData';
import {Card1} from './Card1';
import Card2 from './Card2';


function ProductsCust() {
  const activeBtncss={
    backgroundColor:"#0073CB",
    width:"59vw"
  }
  const activedivcss={
    width:"60.3vw"
  }

  const inactiveBtncss={
    backgroundColor:"#D2E7F8",
    width:"38.4vw"
  }
  const inactivedivcss={
    width:"39.4vw"
  }
  let divProdCss=activedivcss;
  let btnProdCss=activeBtncss;
  let divCustCss=inactivedivcss;
  let btnCustCss=inactiveBtncss;

  const [toggle,setToggle]=useState("");

  const setP=()=>{
    setToggle("P")
    // console.log(toggle);
  }
  const setC=()=>{
    setToggle("C");
    
  }
  console.log(toggle);
  let prodcustdata=productsData;
  if(toggle==="P"){
    divProdCss=activedivcss;
    btnProdCss=activeBtncss;
    divCustCss=inactivedivcss;
    btnCustCss=inactiveBtncss;
    prodcustdata=productsData;
  }else{
    divCustCss=activedivcss;
    btnCustCss=activeBtncss;
    divProdCss=inactivedivcss;
    btnProdCss=inactiveBtncss;
    prodcustdata=custData;
  }
  return (
    <>
    <div className='prod-cust-div'>
        <div className='prod-btn-div' style={divProdCss} onClick={setP}>
          <button className='prod-btn' style={btnProdCss} ></button>
          <p >OUR PRODUCTS</p> 
        </div>
        <div className='cust-btn-div' style={divCustCss} onClick={setC}>
          <button className='cust-btn' style={btnCustCss} ></button>
          <p> OUR CUSTOMERS</p>
        </div>
    </div>
    

    <div className='card1-div'>
      <Card1 Data={prodcustdata} />
    </div>

    <div className='con'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitm ipsum dolor sit.</p>
    </div>


    <div className='products-info'>
      <Card2 Data={prodcustdata} />
    </div>


    </>

  );
}

export default ProductsCust;