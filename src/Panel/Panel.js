import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import Table from './Table'

const Panel = ({ setTaken, setServed, setFree}) => {
  return (
    <Fragment> 
  <Row> 
<Col> <Table setServed={setServed} setTaken={setTaken} setFree={setFree}  nr={1} /></Col>
<Col> <Table setServed={setServed} setTaken={setTaken} setFree={setFree} nr={2} /></Col>
<Col> <Table setServed={setServed} setTaken={setTaken} setFree={setFree} nr={3} /></Col> 

  </Row>
<Row> 
<Col> <Table setServed={setServed} setTaken={setTaken} setFree={setFree} nr={4} /></Col>
<Col> <Table setServed={setServed} setTaken={setTaken} setFree={setFree} nr={5} /></Col>
<Col> <Table setServed={setServed} setTaken={setTaken} setFree={setFree}  nr={6}/></Col> 

  </Row>
  <Row> 
<Col> <Table setServed={setServed} setTaken={setTaken} setFree={setFree} nr={7} /></Col>
<Col> <Table setServed={setServed} setTaken={setTaken} setFree={setFree} nr={8} /></Col>
<Col> <Table setServed={setServed} setTaken={setTaken} setFree={setFree} nr={9}/></Col> 

  </Row>
    </Fragment>
  )
}

export default Panel