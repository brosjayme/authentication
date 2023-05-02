import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login'
import { Container, Row, Col} from 'react-bootstrap';
import Signup from './components/Signup';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute'
import { UserAuthContextProvider } from './context/UserAuthContext';
import './App.css'
import PhoneSignUp from './components/PhoneSignUp';

function App () {
  return (
  <Container>
    <Row>
      <Col>
     <UserAuthContextProvider>
      <Routes>
       <Route path='/home'
        element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } 
      />
        <Route path='/' element={<Login/>} />
        <Route path='phonesignup' element={<PhoneSignUp/>} />
        <Route path='signup' element={<Signup/>} />

      </Routes>
      </UserAuthContextProvider>
      </Col>
    </Row>
  </Container>
  )
}

export default App