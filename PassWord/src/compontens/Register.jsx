import React,{useState} from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'
import {toast} from 'react-toastify'
import AxiosService from "../Utils/Apiservice"
import { useNavigate } from 'react-router-dom';
function Register() {
    let [Name,setName] = useState("")
 
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  
  let navigate=useNavigate()

  let  handleSignup = async()=>{
    try {
      let res = await AxiosService.post('/user/signup',{
       Name,
       email,
       password,
        })
      if(res.status===201)
      {
        navigate('/login')
        toast.success(res.data.message)
       
      }
      
     
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return <>
<div className='container-fluid'>
<div className='card-ref'>
    <Card className='card card-1  ' style={{ width: '25rem' }}>
      <Card.Body className='card-ref1' style={{ width: '25rem',height:"25rem" }}>
        <div className='head'>
        <h3 className='signup-up ' style={{textAlign:"center",background:""}}>Signup </h3>
        </div>
      <Form>
      <Form.Group className="mb-3" >
          <Form.Label> Name </Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
         </Form.Group>
      {/* <Form.Group className="mb-3" >
          <Form.Label>LastName </Form.Label>
          <Form.Control type="text" placeholder="Enter LastName" onChange={(e)=>setLastName(e.target.value)}/>
         </Form.Group> */}
        <Form.Group className="mb-3" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        
        <Button className='btns button-1' variant="primary"  onClick={handleSignup}>
          Signup
        </Button>
       
      </Form>
      </Card.Body>
      </Card>
      </div>
</div>

  </>
}

export default Register