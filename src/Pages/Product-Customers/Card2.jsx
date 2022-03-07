import React from 'react'
// import productsData from './prodCard1Data';
import "./productsCust.css";

const Card2 = (props) => {
  return (
    <>
   { props.Data.map(x=>{
        return(
            <>
                <div className='card2-div'>
                    <div className='card2-img'>
                        <img src={x.image} alt="" srcset="" />
                    </div>
                    <div className='card2-content'>
                        <p>{x.imageName}</p>
                        <div className='card2-internal-con'>
                            <p>{x.prodContent}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    )}
    </>
  )
}

export default Card2