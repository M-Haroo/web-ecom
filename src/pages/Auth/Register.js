
// import { Button, Col, Form, Input, Row, Typography } from 'antd';
// import React, {  useState } from 'react';

// import { Link, useNavigate, } from 'react-router-dom';
// import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

// import { auth, firestore,  } from '../../config/Firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore/lite';
// import { useAuthContext } from '../../context/AuthContext';

// const initialState = { fullName: "", email: "", password: "", confirmPassword: "" };
// const { Title } = Typography;

// export default function Register() {
//   const {dispatch} =useAuthContext()
//   const navigate=useNavigate()
//   const [state, setState] = useState(initialState);
//   const [isProcessing, setIsprocessing]= useState(false)

//   const handleChange = (e) => {
//     setState(s => ({ ...s, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let { fullName, email, password, confirmPassword } = state;
//     fullName = fullName.trim();

//     // Validation checks
//     if (fullName.length < 3) {
//       return window.toastify("Please enter your first name", "error");
//     }
//     if (!window.isEmail(email)) {
//       return window.toastify("Please enter a valid email address", "error");
//     }
//     if (password.length < 6) {
//       return window.toastify("Password must be at least 6 chars.", "error");
//     }
//     if (confirmPassword !== password) {
//       return window.toastify("Passwords don't match", "error");
//     }

//     setIsprocessing(true)

//     createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     createUserProfile(user)
//     console.log(user)
//       window.toastify("A new user has been successfully registered", "success")
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
//     switch (error.code) {
//         case "auth/email-already-in-use":
//             window.toastify("Email address already in use", "error"); break;
//         default: window.toastify("Something went wrong while creating a new user", "error"); break;
//     }
//     setIsprocessing(false)
//   });

   
//     const createUserProfile = async (userCredential)=>{
//       const {uid} =userCredential
//       const {fullName,email} =state
  
//       const user ={uid,fullName,status: "active",roles:['custmer'],email}
  
//     const userData=await setDoc(doc(firestore, "users", uid), user)
//     setIsprocessing(false)
//       dispatch({type: "SET_LOGGED_IN", payload:{userData}})
//       navigate('/')
//     }
//   };

//   return (
//     <main className='auth'>
      
//       <div className="card p-3 p-md-4 w-100">
//         <Title level={2} className='text-center text-white'>Register</Title>
//         <Form layout='vertical'>
//           <Row gutter={[16, 16]}>
//             <Col span={24}>
//               <Input 
//                 size='large' 
//                 className="custom-password-field" 
//                 type='text' 
//                 placeholder='Enter your Full Name'  
//                 name='fullName' 
//                 value={state.fullName} 
//                 prefix={<UserOutlined />} 
//                 onChange={handleChange} 
//               />
//             </Col>
//             <Col span={24}>
//               <Input 
//                 size='large' 
//                 className="custom-password-field" 
//                 type='email' 
//                 placeholder='Enter your Email'    
//                 prefix={<MailOutlined />}  
//                 name='email' 
//                 value={state.email} 
//                 onChange={handleChange} 
//               />
//             </Col>
//             <Col span={24}>
//               <Input.Password 
//                 className="custom-password-field " 
//                 size='large' 
//                 type='password' 
//                 placeholder='Enter your Password ' 
//                 prefix={<LockOutlined />}  
//                 name='password' 
//                 value={state.password} 
//                 onChange={handleChange} 
//               />
//             </Col>
//             <Col span={24}>
//               <Input.Password 
//                 className="custom-password-field" 
//                 size='large' 
//                 type='password' 
//                 placeholder='Enter your Confirm Password' 
//                 prefix={<LockOutlined />}  
//                 name='confirmPassword' 
//                 value={state.confirmPassword} 
//                 onChange={handleChange} 
//               />
//             </Col>
//             <Col span={24}>
//               <Button type='primary' block loading={isProcessing} onClick={handleSubmit}>Register</Button>
             
//             </Col>
//           </Row>
//         </Form>
//         <Title level={5} className='py-3 text-center text-white fw-bold'>
//                 Already  have an account? <Link to="/auth/login" >Login</Link>
//               </Title>
//       </div>
//     </main>
//   );
// }



import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { auth, firestore } from '../../config/firbase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore/lite';
import { useAuthContext } from '../../context/AuthContext';

const initialState = { fullName: "", email: "", password: "", confirmPassword: "" };
const { Title } = Typography;

export default function Register() {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();
    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let { fullName, email, password, confirmPassword } = state;
        fullName = fullName.trim();

        // Validation checks
        if (fullName.length < 3) return window.toastify("Please enter your full name", "error");
        if (!window.isEmail(email)) return window.toastify("Please enter a valid email address", "error");
        if (password.length < 6) return window.toastify("Password must be at least 6 chars.", "error");
        if (confirmPassword !== password) return window.toastify("Passwords don't match", "error");

        setIsProcessing(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await createUserProfile(userCredential.user);
            window.toastify("A new user has been successfully registered", "success");
            setState(initialState);
        } catch (error) {
            console.error(error);
            window.toastify("Error creating user", "error");
        } finally {
            setIsProcessing(false);
        }
    };

    const createUserProfile = async (user) => {
        const { uid } = user;
        const {fullName}=state;
        const userData = { uid, fullName, status: "active", roles: ['customer'], email: state.email };

        await setDoc(doc(firestore, "users", uid), userData);
        dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } });
        navigate('/');
    };

    return (
        <main className='auth'>
            <div className="card p-3 p-md-4 w-100">
                <Title level={2} className='text-center text-white'>Register</Title>
                <Form layout='vertical' onFinish={handleSubmit}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Input 
                                size='large' 
                                className="custom-password-field" 
                                type='text' 
                                placeholder='Enter your Full Name'  
                                name='fullName' 
                                value={state.fullName} 
                                prefix={<UserOutlined />} 
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col span={24}>
                            <Input 
                                size='large' 
                                className="custom-password-field" 
                                type='email' 
                                placeholder='Enter your Email'    
                                prefix={<MailOutlined />}  
                                name='email' 
                                value={state.email} 
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col span={24}>
                            <Input.Password 
                                className="custom-password-field " 
                                size='large' 
                                type='password' 
                                placeholder='Enter your Password ' 
                                prefix={<LockOutlined />}  
                                name='password' 
                                value={state.password} 
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col span={24}>
                            <Input.Password 
                                className="custom-password-field" 
                                size='large' 
                                type='password' 
                                placeholder='Enter your Confirm Password' 
                                prefix={<LockOutlined />}  
                                name='confirmPassword' 
                                value={state.confirmPassword} 
                                onChange={handleChange} 
                            />
                        </Col>
                        <Col span={24}>
                            <Button type='primary' block loading={isProcessing} onClick={handleSubmit}>Register</Button>
                        </Col>
                    </Row>
                </Form>
                <Title level={5} className='py-3 text-center text-white fw-bold'>
                    Already have an account? <Link to="/auth/login">Login</Link>
                </Title>
            </div>
        </main>
    );
}
