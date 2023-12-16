import React,{useState} from 'react'
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import {toast} from 'react-toastify'
import AxiosService from "../Utils/Apiservice"
import { useNavigate } from 'react-router-dom';


function ForgetPassWord() {
let [email,setEmail]=useState("")
let navigate=useNavigate()


let  handleSubmit = async()=>{
    try {
      let res = await AxiosService.post('/user/forget-password',{
      
       email,
      
        })
      if(res.status===200)
      {
         navigate('/message')
        toast.success(res.data.message)
       
      }
      
     
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return <>
  <div className='for'>

<div className='container-fluid'>
<Card className='card-wapper ' style={{ width: '25rem',background:"" }}>
      <Card.Body  className="card-wapper"style={{ width: '25rem',height:"15rem" }}>
      <h3 className='pass'>ForgetPassword </h3>
      <Form>
     
        <Form.Group className="mb-3" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
       
        <Button className='btns' variant="primary" onClick={handleSubmit} >
          Submit
        </Button>
      </Form>
      </Card.Body>
      </Card>
</div>
</div>
  </>
}

export default ForgetPassWord