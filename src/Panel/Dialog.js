import React, { Fragment } from 'react'
import styled from './Dialog.module.scss'
import { Modal, Button } from 'react-bootstrap'

const Dialog = (props) => {


const FreeHandler = () =>{
  if(props.status==="Taken" || props.status==="Served" ){  
  props.setstatus("Free")
  props.onHide(); 

  props.setFree((val)=>val+1); 
  if(props.status==="Taken"){
  props.setTaken((val)=>val-1);
  }
  if(props.status==="Served"){
    props.setServed((val)=>val-1);
    }
  
}
}
const TakenHandler = () =>{
  if(props.status==="Free"){ 
  props.setstatus("Taken")
  props.onHide()
  props.setFree((val)=>val-1); 
  props.setTaken((val)=>val+1);

  }
}

const ServedHandler = () =>{
  if(props.status==="Taken"){ 
  props.setstatus("Served")
  props.onHide()
  props.setServed((val)=>val+1);
  props.setTaken((val)=>val-1);
 
}
}





  return (
    <Fragment> 
   <Modal
   show={props.show}
    onHide={props.onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{textAlign : "center"}}
    >
      
        <Modal.Title  id="contained-modal-title-vcenter ">
          Table status
        </Modal.Title>
      
      <Modal.Body className={styled.buttons}>
        
       <Button onClick={TakenHandler}>Taken</Button> <br />
        <Button onClick={FreeHandler}>Free</Button><br />
        <Button onClick={ServedHandler}>Served</Button>
        
        
        
      </Modal.Body>
     
    </Modal>

    </Fragment>
  )
}

export default Dialog