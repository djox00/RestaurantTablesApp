import React, { Fragment } from 'react'
import styled from './NavBar.module.scss'
import { Row, Col} from 'react-bootstrap'
import Logo from '../images/logo1.jpg' ; 
import Caption from '../images/logo2.jpg' ; 
import Order from './Order';



let Orders = [{OrderID: 399202, table: 5, status: "SERVED", img: "https://www.rtvbn.com/storage/news/2022-04-01/1648797045_zbog-cijene-ulja-pomfrit-bi-mogao-postati-luksuz.jpg"},
{OrderID: 512202, table: 1, status: "SERVED", img: "https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg?w=480&h=270&crop=1"},
{OrderID: 399202, table: 5, status: "SERVED", img: "https://www.rtvbn.com/storage/news/2022-04-01/1648797045_zbog-cijene-ulja-pomfrit-bi-mogao-postati-luksuz.jpg"},
{OrderID: 399202, table: 5, status: "SERVED", img: "https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg?w=480&h=270&crop=1"},
{OrderID: 399202, table: 5, status: "SERVED", img: "https://www.rtvbn.com/storage/news/2022-04-01/1648797045_zbog-cijene-ulja-pomfrit-bi-mogao-postati-luksuz.jpg"}]; 



const NavBar = (props) => {

let OrdersList = Orders.map((order)=> <Order key={Math.random()} OrderData={order} />)


  return (
    <Fragment> 
<Row className={styled.navbar}> 
<Col lg={3} className={styled['logo-container']}> 
<img src={Logo} alt={"pot"} /> <br />
<img src={Caption} alt={"smart"} />
</Col>

<Col lg={4} className={styled['orders-status-container']}> 
<div className={styled.orderStatus}> <p>Taken:<span>{props.Taken}</span></p> </div>  <br/> <br/>
<div className={styled.orderStatus}> <p>Free:<span>{props.Free}</span></p> </div> <br/> <br/>
<div className={styled.orderStatus}> <p>Served:<span>{props.Served}</span></p> </div>
</Col>

<Col lg={5} className={styled['orders-container']}> 
 <span style={{fontWeight: 500, fontSize: "20px"}}> Orders ready  </span>

{OrdersList}

</Col>


</Row>
    </Fragment>
  )
}

export default NavBar