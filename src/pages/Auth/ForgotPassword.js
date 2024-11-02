import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
// import { useNavigate } from 'react-router-dom';
import {   MailOutlined } from '@ant-design/icons';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../config/firbase';
import { Link } from 'react-router-dom';
// import { useAuthContext } from '../../context/AuthContext';

const initialState = { email: "" };
const { Title } = Typography;

export default function ForgotPassword() {
    // const navigate = useNavigate();
    // const { dispatch } = useAuthContext();
    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }));
    };

    const handleUpdate = async (e) => {
      e.preventDefault();
      const { email } = state;
  
      if (!window.isEmail(email)) {
          return window.toastify("Please enter a valid email address", "error");
      }
  
      setIsProcessing(true);
  
      try {
          await sendPasswordResetEmail(auth, email);
          window.toastify("Password reset email sent successfully", "success");
      } catch (error) {
          // const errorCode = error.code;
          const errorMessage = error.message;
          window.toastify(`Error: ${errorMessage}`, "error");
      } finally {
          setIsProcessing(false);
      }
  };
  

    return (
        <main className='auth'>
            <div className="card p-3 p-md-4 w-100">
                <Title level={2} className='text-center text-white'>Welcome Back</Title>
                <Form layout='vertical' onFinish={handleUpdate}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                        <Input 
                                size='large' 
                                className="custom-password-field" 
                                type='email' 
                                placeholder='Enter your Email'    
                                prefix={<MailOutlined />}  
                                name='email' 
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col span={24}>
                            <Button type='primary' block loading={isProcessing} onClick={handleUpdate}>Rest Password</Button>
                        </Col>
                    </Row>
                </Form>
                <Title level={5} className='py-3 text-center text-white fw-bold'>
                    know my Password? <Link to="/auth/login">Login</Link>
                </Title>
            </div>
        </main>
    );
}
