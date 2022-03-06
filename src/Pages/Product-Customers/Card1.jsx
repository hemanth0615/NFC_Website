import React from 'react'
// import productsData from './prodCard1Data';
import "./productsCust.css";
export const Card1 = (props) => {
    return (
        <>
        {
            props.Data.map(x=>{
                return (
                <>
                <div key={x.id} className='inter-card1'>
                    <div className='card1-img'>
                        <img  src={x.image} alt="" srcset="" />
                    </div>
                    <div className='card1-c'>
                        <p>{x.imageName}</p>
                    </div>
                </div>
                </>
                );
            })
        }
        

        </>
        );
}
