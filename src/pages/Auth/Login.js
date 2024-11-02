
// import React, { useState } from 'react'
// import { Button, Col, Form, Input, Row, Typography } from 'antd'
// import { Link, useNavigate } from 'react-router-dom';
// import {  MailOutlined, LockOutlined } from '@ant-design/icons';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, firestore } from '../../config/Firebase';
// import { doc, getDoc } from 'firebase/firestore/lite';
// import { useAuthContext } from '../../context/AuthContext';

// const initialState = {  email: "", password: "" };
// const {Title}= Typography
// export default function Login() {

//   const navigate= useNavigate()
//   const {dispatch} =useAuthContext()
//   const [state, setState] = useState(initialState);
//   const [isProcessing, setIsprocessing]= useState(false)
  

//   const handleChange = (e) => {
//     setState(s => ({ ...s, [e.target.name]: e.target.value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const {  email, password,  } = state;
   

//     // Validation checks
   
//     if (!window.isEmail(email)) {
//       return window.toastify("Please enter a valid email address", "error");
//     }
//     if (password.length < 6) {
//       return window.toastify("Password must be at least 6 chars.", "error");
//     }
    

//     setIsprocessing(true)

//     signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     readUserProfile(user)
//     console.log(user)
//       window.toastify("Login successfull ", "success")
//       setState(initialState)
//       setTimeout(() => {
//         setIsprocessing(false)
//       }, 500);
//     // ...
//   })
//   .catch((error) => {

//     console.error(error)

//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // ..
    
//     setIsprocessing(false)
//     window.toastify("Error while user not Login", "error")
//   });

//   const readUserProfile = async (userCredential)=>{
//     const {uid} =userCredential
    
//     const docRef = doc(firestore, "users", uid);
// const docSnap = await getDoc(docRef);
// console.log(docSnap.data() )
// setState(initialState)
//   // const userData=await getDoc(doc(firestore, "users", uid))
//   setIsprocessing(false)
//     dispatch({type: "SET_LOGGED_IN", payload:{docSnap}})
//     navigate('/')
//   }
// }
//   return (
//     <main className='auth'>
//        <div className="card p-3 p-md-4 w-100">
//         <Title level={2} className='text-center text-white'>Login</Title>
//         <Form layout='vertical' >
//           <Row gutter={[16,16]}>
            
//             <Col span={24}>
//             <Input size='large' className="custom-password-field" type='email' placeholder='Enter your Email'    prefix={<MailOutlined />}  name='email' onChange={handleChange} />
//             </Col>
//             <Col span={24}  >
//             <Input.Password className="custom-password-field" size='large' type='password' placeholder='Enter your Password' prefix={<LockOutlined />}  name='passsword' onChange={handleChange} />
//             </Col>
            
//             <Col span={24}>
//             <Button type='primary'  block loading={isProcessing} onClick={handleLogin} >Login</Button>
           
//             </Col>
//           </Row>
//         </Form>
//         <Title level={5} className='py-3 text-center text-white fw-bold'>Need an account? <Link to="/auth/register" >Register</Link></Title>
//        </div>
//     </main>
//   )
// }


import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../config/firbase';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useAuthContext } from '../../context/AuthContext';

const initialState = { email: "", password: "" };
const { Title } = Typography;

export default function Login() {
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();
    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = state;

        if (!window.isEmail(email)) return window.toastify("Please enter a valid email address", "error");
        if (password.length < 6) return window.toastify("Password must be at least 6 chars.", "error");

        setIsProcessing(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            await readUserProfile(userCredential.user);
            window.toastify("Login successful", "success");
            setState(initialState);
        } catch (error) {
            console.error(error);
            window.toastify("Error during login", "error");
        } finally {
            setIsProcessing(false);
        }
    };

    const readUserProfile = async (user) => {
        const { uid } = user;
        const docRef = doc(firestore, "users", uid);
        
        try {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } });
                navigate('/');
            } else {
                console.error("No such user document!");
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    return (
        <main className='auth'>
            <div className="card p-3 p-md-4 w-100">
                <Title level={2} className='text-center text-white'>Login</Title>
                <Form layout='vertical' onFinish={handleLogin}>
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
                            <Input.Password 
                                className="custom-password-field" 
                                size='large' 
                                type='password' 
                                placeholder='Enter your Password' 
                                prefix={<LockOutlined />}  
                                name='password' 
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col>

                        <Link to='/auth/forgot-password' className='text-end'>Forgot Password?</Link>
                        
                        </Col>
                        <Col span={24}>
                            <Button type='primary' block loading={isProcessing} onClick={handleLogin}>Login</Button>
                        </Col>
                    </Row>
                </Form>
                <Title level={5} className='py-3 text-center text-white fw-bold'>
                    Need an account? <Link to="/auth/register">Register</Link>
                </Title>
            </div>
        </main>
    );
}
