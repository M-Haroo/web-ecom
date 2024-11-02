
// import './App.scss';
// import "bootstrap/dist/js/bootstrap.bundle"
// import Routes from './pages/Routes'
// function App() {
//   return (
//     <>
//       {/* <Routes/> */}
//       <Routes/>
//     </>
//   );
// }

// export default App;


import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import Routes from './pages/Routes'
import { useAuthContext } from './context/AuthContext';
import Loader from './important/loader';
import { CartProvider } from 'context/CartContext';
function App() {
  const {isAppLoading} =useAuthContext()

  

  
  return (
    < >
      {!isAppLoading
      ?
      <CartProvider>
       <Routes />
       </CartProvider>

      : <Loader/>
    }
    </>
  );
}

export default App;
