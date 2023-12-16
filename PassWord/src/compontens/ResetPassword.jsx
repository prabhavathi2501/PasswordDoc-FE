import React,{useState} from 'react'
import  Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {toast} from 'react-toastify'
import AxiosService from "../Utils/Apiservice"
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";



function ResetPassword() {
    let[newpassword,setLastNewpassword]=useState("")
    let[confirmpassword,setConfirmpassword]=useState("")
    let[token,setToken]=useState("")
   let navigate = useNavigate()
   const search = useLocation().search;
  //  const tokens = new URLSearchParams(search).get("token");
  //  console.log(tokens);
  //  if(tokens)
  //  {
  // setToken(tokens)
  //  }
    let  handleSubmit = async()=>{
     
        try {
          const tokens = new URLSearchParams(search).get("token");
        // console.log(tokens);
          let res = await AxiosService.post('/user/reset-password',{
           
           newpassword,
           confirmpassword,
           tokens
          
            })
           
          if(res.status===200)
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
  <Card className='card-wapper  ' style={{ width: '25rem',background:"" }}>
      <Card.Body className='card-wapper' style={{ width: '25rem',height:"20rem" }}>
      <h3 className='pass'> ResetPassword </h3>
      <Form>
      <Form.Group className="mb-3" >
          <Form.Label>NewPassword </Form.Label>
          <Form.Control type="password" placeholder="Enter Newpassword" onChange={(e)=>setLastNewpassword(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>ConfirmPassword </Form.Label>
          <Form.Control type="password" placeholder="Enter confirmpassword" onChange={(e)=>setConfirmpassword(e.target.value)}/>
         </Form.Group>
       
        <Button className='btns' variant="primary" onClick={handleSubmit} >
        login
        </Button>
      </Form>
      </Card.Body>
      </Card>
  </div>
  </>
}

export default ResetPassword