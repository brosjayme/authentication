import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { Signup } = useUserAuth();
    const handlesubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await Signup(email,password, error);
        }catch (err) {
       setError(err.message);
        }
    } 
  return (
    <>
    <div className='p-4 box'>
        <h2 className='mb-3'>Form Auth Signup</h2>
        <Form onSubmit= {handlesubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='Email address'
             onChange ={ (e) => setEmail(e.target.value)}/>
            </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password'
              onChange ={ (e) => setPassword(e.target.value)}/>
          </Form.Group>

          <div className='d-grid gap-2'>
            <Button variant='primary' type='submit'>
                sign up
            </Button>
          </div>
        </Form>
    </div>
    <div className='p-4 box mt-3 text-center'>
        Already have an account?  <Link to='/'>Log In</Link>
    </div>
    </>
  )
}

export default Signup