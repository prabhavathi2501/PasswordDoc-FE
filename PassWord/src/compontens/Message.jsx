import React from 'react'
import Card from "react-bootstrap/Card"
import CardBody from 'react-bootstrap/esm/CardBody'
import { useNavigate } from 'react-router-dom';


function Message() {
  let navigate =useNavigate("")
  return<>
  <div className='container-fluid'>
    <Card>
      <Card.Body>
  <h1 className='email-link'>link  sent your email pls check your mail</h1>
  <p className='or'>or</p>

  <a herf="#"  className="message" onClick={()=>navigate("/login")} ><h4>signin</h4></a>
  </Card.Body>
  </Card>
  </div>
  </>
}

export default Message