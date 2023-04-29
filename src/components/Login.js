import React from 'react'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button'

const Login = () => {
  return (
    <>
    <div className='p-4 box'>
        <h2 className='mb-3'>Form Auth Signup</h2>
        <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='Email address'></Form.Control>
            </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password'/>
          </Form.Group>

          <div className='d-grid gap-2'>
            <Button variant='primary' type='submit'>
                Log In
            </Button>
          </div>
        </Form>
    </div>
    <div className='p-4 box mt-3 text-center'>
        Already have an account? <Link to='/signup'>Sign In</Link>
    </div>
    </>
  )
}

export default Login