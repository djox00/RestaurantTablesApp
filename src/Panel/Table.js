import React, { Fragment, useState } from 'react'
import styled from './Table.module.scss'
import TableImage from '../images/table.jpg'
import Dialog from './Dialog.js'

const Table = ({nr,setServed,setFree,setTaken}) => {

  const [TableStatus, setTableStatus] = useState("Free");  

  const [modalShow, setModalShow] = useState(false);



 const NumberColor = ()=>{
if(TableStatus === 'Free'){ return "rgb(14, 189, 14)"}
if(TableStatus === 'Taken') return "rgb(219, 20, 20)"; 
if(TableStatus === 'Served') return "rgb(26, 0, 143)"; 

  }



  return (
    <Fragment> 
        <div className={styled['icon-container']}>
          <div className={styled.tableNumber} style={{backgroundColor: NumberColor()}} onClick={() => setModalShow(true)}     >{nr} </div>
              <img src={TableImage} alt={"table"} />
          
        <Dialog
         setstatus={setTableStatus}
        show={modalShow}
        onHide={() => setModalShow(false)}
        setServed={setServed}
        setFree={setFree}
        setTaken={setTaken}
        status={TableStatus}
        
        />
        
      

            </div> 

    </Fragment>
  )
}

export default React.memo(Table)