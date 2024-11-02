import React, { useState, useEffect } from 'react';
import { firestore } from '../../../config/firbase';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useCartContext } from '../../../context/CartContext';
import { useAuthContext } from '../../../context/AuthContext'; // Import Auth Context
import { useNavigate } from 'react-router-dom'; // For navigation

export default function Hero() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const { dispatch } = useCartContext();
  const { isAuthenticated } = useAuthContext(); // Get authentication status
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(firestore, 'products');
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      navigate('/auth/login');
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center py-5'>Product List</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row">
              {products.map(product => (
                <div key={product.id} className="col col-md-3 col-sm-4">
                  <div className="card p-3 mb-3">
                    <img src={product.imageUrl} alt={product.title} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text"><strong>Price: </strong>${product.price}</p>
                      <button className="btn btn-danger btn-md" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
