import React from 'react'
import {Routes, Route,Navigate } from 'react-router-dom'
import ForgetPassword from '../compontens/ForgetPassWord'
import ResetPassword from '../compontens/ResetPassword'
 import Login from '../compontens/Login'
import Register from '../compontens/Register'
import Home from '../compontens/Home'
import Message from '../compontens/Message'

function AppRoutes() {
  return <Routes>
  <Route path='/forgetpassword' element={<ForgetPassword/>}/>
  <Route path='/resetpassword' element={<ResetPassword/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/' element={<Register/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/message' element={<Message/>}/>
  <Route path='/*' element={<Navigate to = '/'/>}/>
 
  </Routes>
}

export default AppRoutes


