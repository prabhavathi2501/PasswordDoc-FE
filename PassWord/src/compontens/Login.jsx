import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../Utils/Apiservice'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Login() {
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let navigate=useNavigate()
  
    let  handleLogin = async()=>{
      try {
        let res = await AxiosService.post('/user/login',{
          email,
          password
        })
        if(res.status===200)
        {
          toast.success(res.data.message)
          sessionStorage.setItem('token',res.data.token)
          sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
          navigate("/home")
        }
       
       
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
  return<>
  
  <div className='container-fluid'>
  <Card style={{ width: '25rem',height:"18rem",background:"" }}>
      <Card.Body className='card-wapper'>
      <h3 className='pass'>Login </h3>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className='mb-3' type="checkbox" label="Remember Me" >
       
       </Form.Check>
       <a herf="#" className='herf-a'  onClick={()=>navigate('/forgetpassword')}>ForgetPassWord</a>
      </Form.Group>
     
      </div>
       
        <Button className='btns' variant="primary"  onClick={handleLogin}>
          Submit
        </Button>
        <div>
          <p>Don't have a account?
          <a herf="#" className='herf-a' onClick={()=>navigate('/register')}> signup</a>
        
        </p></div>
      </Form>
      </Card.Body>
      </Card>
  </div>
  </>
}

export default Login