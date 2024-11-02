// // import React from 'react';
// // import { Link,   } from 'react-router-dom';
// // import { useAuthContext } from '../../context/AuthContext';
// // import { signOut } from 'firebase/auth';
// // import { auth } from '../../config/firbase';

// // import heartIcon from '../../assets/icons/heart-line.png'
// // import shoppyBagIcon from '../../assets/icons/shopping-bag-line.png'
// // import { Badge, Image } from 'antd';
// // export default function Navbar() {
  
// //   const { isAuthenticated, dispatch } = useAuthContext();

// //   const handleLogout = () => {
// //     signOut(auth)
// //       .then(() => {
// //         dispatch({ type: "SET_LOGGED_OUT" });

// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };

// //   return (
// //     <header>
// //       <nav className="navbar navbar-expand-lg bg-light navbar-primary">
// //         <div className="container">
        
// //           <Link to='/' className="navbar-brand ms-2">Navbar</Link>
// //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
// //               <li className="nav-item">
// //                 <Link to='/' className="nav-link active" aria-current="page">Home</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to='/shop' className="nav-link">Shop</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to='/cart' className="nav-link">Cart</Link>
// //               </li>
// //             </ul>
// //             <div className="d-flex">
// //               <img src={heartIcon} alt='heartIcon' className='ms-2'  style={{height: 30}}/>
// //               <Badge>
// //               <Image src={shoppyBagIcon}  alt='shoppyBagIcon'style={{height: 30}} className=''/>
// //               </Badge>
// //               {!isAuthenticated ? (
// //                 <Link to='/auth/login' className="btn btn-success text-white " >Login</Link>
// //               ) : (
// //                 <>
// //                   <Link to='/dashboard/home' className="btn btn-success btn-sm ms-2 text-white">Dashboard</Link>
// //                   <button className='btn btn-danger btn-sm text-white ms-2' onClick={handleLogout}>Logout</button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // }




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuthContext } from '../../context/AuthContext';
// import { useCartContext } from '../../context/CartContext'; // Import Cart Context
// import { signOut } from 'firebase/auth';
// import { auth } from '../../config/firbase';

// import heartIcon from '../../assets/icons/heart-line.png';
// import shoppyBagIcon from '../../assets/icons/shopping-bag-line.png';

// export default function Navbar() {
//   const { isAuthenticated, dispatch } = useAuthContext();
//   const { cart } = useCartContext(); // Get cart items

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         dispatch({ type: "SET_LOGGED_OUT" });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg bg-light navbar-primary">
//         <div className="container">
//           <Link to='/' className="navbar-brand ms-2">Navbar</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to='/' className="nav-link active" aria-current="page">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to='/shop' className="nav-link">Shop</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to='/cart' className="nav-link">Cart</Link>
//               </li>
//             </ul>
//             <div className="d-flex">
//               <img src={heartIcon} alt='heartIcon' className='me-2' style={{height: 30}} />
//               <Link to='/cart' className='position-relative'>
//                 <img src={shoppyBagIcon} alt='shoppyBagIcon' style={{height: 30}} className='ms-2' />
//                 {cart.length > 0 && (
//                   <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
//                     {cart.length}
//                   </span>
//                 )}
//               </Link>
//               {!isAuthenticated ? (
//                 <Link to='/auth/login' className="btn btn-success text-white">Login</Link>
//               ) : (
//                 <>
//                   <Link to='/dashboard/home' className="btn btn-success btn-sm ms-2 text-white">Dashboard</Link>
//                   <button className='btn btn-danger btn-sm text-white ms-2' onClick={handleLogout}>Logout</button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }




import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { useCartContext } from '../../context/CartContext'; // Import Cart Context
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firbase';

import heartIcon from '../../assets/icons/heart-line.png';
import shoppyBagIcon from '../../assets/icons/shopping-bag-line.png';

export default function Navbar() {
  const { isAuthenticated, dispatch } = useAuthContext();
  const { cart } = useCartContext(); // Get cart items

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "SET_LOGGED_OUT" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light navbar-primary">
        <div className="container">
          <Link to='/' className="navbar-brand ms-2">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/shop' className="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to='/cart' className="nav-link">Cart</Link>
              </li>
            </ul>
            <div className="d-flex">
              <img src={heartIcon} alt='heartIcon' className='me-2' style={{height: 30}} />
              <Link to='/cart' className='position-relative'>
                <img src={shoppyBagIcon} alt='shoppyBagIcon' style={{height: 30}} className='ms-2' />
                {cart.length > 0 && (
                  <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                    {cart.length}
                  </span>
                )}
              </Link>
              {!isAuthenticated ? (
                <Link to='/auth/login' className="btn btn-success text-white">Login</Link>
              ) : (
                <>
                  <Link to='/dashboard/home' className="btn btn-success btn-sm ms-2 text-white">Dashboard</Link>
                  <button className='btn btn-danger btn-sm text-white ms-2' onClick={handleLogout}>Logout</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
