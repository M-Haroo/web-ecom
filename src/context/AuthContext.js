
// import { onAuthStateChanged } from 'firebase/auth'
// import React, { createContext,  useContext, useEffect, useReducer, useState, } from 'react'
// import { auth, firestore } from '../config/Firebase'
// import { doc, getDoc } from 'firebase/firestore/lite'
// import { useNavigate } from 'react-router-dom'
// // import { auth, firestore } from '../config/Firebase'
// // import {firestore, auth} from '../config/Firebase'; // Ensure the case matches

// // import { useNavigate } from 'react-router-dom'


// const Auth = createContext()

// const initialState = { isAuthenticated: false, user: {} }

// const reducer = (state, { type, payload }) => {
//     switch (type) {
//         case "SET_LOGGED_IN":
//             return { isAuthenticated: true, user: payload.user }
//         case "SET_PROFILE":
//             return { ...state, user: payload.user }
//         case "SET_LOGGED_OUT":
//             return initialState
//         default: return state
//     }
// }

// export default function AuthContext({ children }) {
//         const navigate =useNavigate()
//     const [authState, dispatch] = useReducer(reducer, initialState)
//     const [isAppLoading, setIsAppLoading] = useState(false)
       

//         useEffect(()=>{
//             setIsAppLoading(true)
            
            
            
//             onAuthStateChanged(auth, (user) => {
//                 if (user) {
//                   // User is signed in, see docs for a list of available properties
//                   // https://firebase.google.com/docs/reference/js/auth.user
//                   const uid= user.id
//                   readUserProfile(uid)
//                     console.log(uid)
//                     // console.log("user is sign in")
//                       dispatch({type: "SET_LOGGED_IN", payload: {user}})
//                 //   navigate('/')
//                   // ...
//                 } else {
//                   // User is signed out
//                   // ...
//                   setIsAppLoading(false)
                  
//                   console.log("User is signed out")
//                 }
//               });
//         },[])
      

//         const readUserProfile = async (uid)=>{
            
//             const docRef = doc(firestore, "users", uid);
//         const docSnap = await getDoc(docRef);
//         console.log(docSnap.data() )
//         const userData= docSnap.data()
  
//           setIsAppLoading(false)
//             dispatch({type: "SET_LOGGED_IN", payload:{userData}})
//             navigate('/')
//           }
   
//     return (
//         <Auth.Provider value={{ ...authState, dispatch, isAppLoading }}>
//             {children}
//         </Auth.Provider>
//     )
// }

// export const useAuthContext = () => useContext(Auth)








import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { auth, firestore } from '../config/firbase';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router-dom';

const Auth = createContext();

const initialState = { isAuthenticated: false, user: {} };

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_LOGGED_IN":
            return { isAuthenticated: true, user: payload.user };
        case "SET_PROFILE":
            return { ...state, user: payload.user };
        case "SET_LOGGED_OUT":
            return initialState;
        default:
            return state;
    }
};

export default function AuthContext({ children }) {
    const navigate = useNavigate();
    const [authState, dispatch] = useReducer(reducer, initialState);
    const [isAppLoading, setIsAppLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid; // Corrected from user.id to user.uid
                await readUserProfile(uid);
                dispatch({ type: "SET_LOGGED_IN", payload: { user } });
            } else {
                setIsAppLoading(false);
                dispatch({ type: "SET_LOGGED_OUT" });
                console.log("User is signed out");
            }
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const readUserProfile = async (uid) => {
        try {
            const docRef = doc(firestore, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                dispatch({ type: "SET_PROFILE", payload: { user: userData } });
                navigate('/');
            } else {
                console.error("No such document!");
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        } finally {
            setIsAppLoading(false);
        }
    };

    return (
        <Auth.Provider value={{ ...authState, dispatch, isAppLoading }}>
            {children}
        </Auth.Provider>
    );
}

export const useAuthContext = () => useContext(Auth);
