import React, { Fragment } from 'react'
import styled from "./Order.module.scss"
const Order = ({OrderData}) => {

const {OrderID, table, status, img } = OrderData; 

  return (
    <Fragment>   
        <div className={styled.card}>
           <span> Order ID: {OrderID}</span> <br />
           <span>Table: {table}</span> <br />
           <p>{status}</p>
           <img src={img} alt="Ham" />
            
            </div> 


    </Fragment>
  )
}

export default Order