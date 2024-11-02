// import React from 'react'

// export default function Home() {
//   return (
//     <main>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <h1 className='text-center py-5'> Add Product</h1>
//                 <div className="row ">
//                   <div className="col">
//                     <div className="card p-4 p-md-3 bg-body-secondary ">
//                     <form >
//                         <div className="row">
//                           <div className="col col-md-3 col-sm-4">
//                             <label htmlFor="">Product Title</label>
//                             <input type="text"  placeholder='Enter product title'  className='form-control ' style={{width: 500}} />
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col col-md-3 col-sm-4">
//                             <label htmlFor="">Product description</label>
//                             <input type="text"  placeholder='Enter product title' className='form-control '  style={{width: 500}} />
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col col-md-3 col-sm-4">
//                             <label htmlFor="">Product price</label>
//                             <input type="text"  placeholder='Enter product title' className='form-control' style={{width: 500}}/>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col col-md-3 col-sm-4">
//                             <label htmlFor="">Upload Product Image</label>
//                             <input type="file"  placeholder='Enter product title'  className='form-control' style={{width: 500}}/>
//                           </div>
//                         </div>
//                         <div className='d-flex justify-content-end py-2'>
//                         <button className='btn btn-sm btn-success   '>Add Product</button>
//                         </div>
                       

//                     </form>
//                     </div>
//                   </div>
//                 </div>

        
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }


// import React, { useState } from 'react';

// export default function Home() {
//   const [product, setProduct] = useState({
//     title: '',
//     description: '',
//     price: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setProduct({ ...product, image: files[0] });
//       // console.log(setProduct())
//     } else {
//       setProduct({ ...product, [name]: value });
//       // console.log(product)
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., send data to an API)
//     console.log(product);
//   };

//   return (
//     <main>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <h1 className='text-center py-5'>Add Product</h1>
//             <div className="row">
//               <div className="col">
//                 <div className="card p-4 p-md-3 bg-body-secondary">
//                   <form onSubmit={handleSubmit}>
//                     <div className="row">
//                       <div className="col col-md-3 col-sm-4">
//                         <label htmlFor="title">Product Title</label>
//                         <input
//                           type="text"
//                           name="title"
//                           value={product.title}
//                           onChange={handleChange}
//                           placeholder='Enter product title'
//                           className='form-control'
//                           style={{ width: 500 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col col-md-3 col-sm-4">
//                         <label htmlFor="description">Product Description</label>
//                         <input
//                           type="text"
//                           name="description"
//                           value={product.description}
//                           onChange={handleChange}
//                           placeholder='Enter product description'
//                           className='form-control'
//                           style={{ width: 500 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col col-md-3 col-sm-4">
//                         <label htmlFor="price">Product Price</label>
//                         <input
//                           type="text"
//                           name="price"
//                           value={product.price}
//                           onChange={handleChange}
//                           placeholder='Enter product price'
//                           className='form-control'
//                           style={{ width: 500 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col col-md-3 col-sm-4">
//                         <label htmlFor="image">Upload Product Image</label>
//                         <input
//                           type="file"
//                           name="image"
//                           onChange={handleChange}
//                           className='form-control'
//                           style={{ width: 500 }}
//                         />
//                       </div>
//                     </div>
//                     <div className='d-flex justify-content-end py-2'>
//                       <button type="submit" className='btn btn-sm btn-success'>Add Product</button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useState } from 'react';

// export default function Home() {
//   const [product, setProduct] = useState({
//     title: '',
//     description: '',
//     price: '',
//     image: null,
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       if (files.length > 0) {
//         setProduct({ ...product, image: files[0] });
//         setError(''); // Clear any previous error
//       } else {
//         setError('Please select an image file.');
//       }
//     } else {
//       setProduct({ ...product, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!product.title || !product.description || !product.price || !product.image) {
//       setError('Please fill in all fields and upload an image.');
//       return;
//     }

//     // Handle form submission logic here (e.g., send data to an API)
//     console.log('Product submitted:', product);
//     // Reset form after submission
//     setProduct({ title: '', description: '', price: '', image: null });
//   };
    
//   return (
//     <main>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <h1 className='text-center py-5'>Add Product</h1>
//             <div className="row">
//               <div className="col">
//                 <div className="card p-4 p-md-3 bg-body-secondary">
//                   <form onSubmit={handleSubmit}>
//                     <div className="row">
//                       <div className="col col-md-3 col-sm-4">
//                         <label htmlFor="title">Product Title</label>
//                         <input
//                           type="text"
//                           name="title"
//                           value={product.title}
//                           onChange={handleChange}
//                           placeholder='Enter product title'
//                           className='form-control'
//                           style={{ width: 500 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col col-md-3 col-sm-4">
//                         <label htmlFor="description">Product Description</label>
//                         <input
//                           type="text"
//                           name="description"
//                           value={product.description}
//                           onChange={handleChange}
//                           placeholder='Enter product description'
//                           className='form-control'
//                           style={{ width: 500 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col col-md-3 col-sm-4">
//                         <label htmlFor="price">Product Price</label>
//                         <input
//                           type="text"
//                           name="price"
//                           value={product.price}
//                           onChange={handleChange}
//                           placeholder='Enter product price'
//                           className='form-control'
//                           style={{ width: 500 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col col-md-3 col-sm-4">
//                         <label htmlFor="image">Upload Product Image</label>
//                         <input
//                           type="file"
//                           name="image"
//                           accept="image/*" // Restricts to image files
//                           onChange={handleChange}
//                           className='form-control'
//                           style={{ width: 500 }}
//                         />
//                       </div>
//                     </div>
//                     {error && <div className="alert alert-danger mt-2">{error}</div>}
//                     <div className='d-flex justify-content-end py-2'>
//                       <button type="submit" className='btn btn-sm btn-success'>Add Product</button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



import React, { useState } from 'react';
import { firestore, storage } from 'config/firbase'; // Ensure this path is correct
import { collection, addDoc } from 'firebase/firestore/lite';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Home() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      if (files.length > 0) {
        setProduct({ ...product, image: files[0] });
        setError(''); // Clear any previous error
      } else {
        setError('Please select an image file.');
      }
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!product.title || !product.description || !product.price || !product.image) {
      setError('Please fill in all fields and upload an image.');
      return;
    }

    try {
      // Upload image to Firebase Storage
      const imageRef = ref(storage, `images/${product.image.name}`);
      await uploadBytes(imageRef, product.image);
      const imageUrl = await getDownloadURL(imageRef);

      // Add product to Firestore
      await addDoc(collection(firestore, 'products'), {
        title: product.title,
        description: product.description,
        price: product.price,
        imageUrl: imageUrl,
      });

      // Reset form
      setProduct({ title: '', description: '', price: '', image: null });
      setError('');
      console.log('Product added successfully!');
    } catch (err) {
      console.error('Error adding product:', err);
      setError('Failed to add product. Please try again.');
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center py-5'>Add Product</h1>
            <div className="row">
              <div className="col">
                <div className="card p-4 p-md-3 bg-body-secondary">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col col-md-3 col-sm-4">
                        <label htmlFor="title">Product Title</label>
                        <input
                          type="text"
                          name="title"
                          value={product.title}
                          onChange={handleChange}
                          placeholder='Enter product title'
                          className='form-control'
                          style={{ width: 500 }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col-md-3 col-sm-4">
                        <label htmlFor="description">Product Description</label>
                        <input
                          type="text"
                          name="description"
                          value={product.description}
                          onChange={handleChange}
                          placeholder='Enter product description'
                          className='form-control'
                          style={{ width: 500 }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col-md-3 col-sm-4">
                        <label htmlFor="price">Product Price</label>
                        <input
                          type="text"
                          name="price"
                          value={product.price}
                          onChange={handleChange}
                          placeholder='Enter product price'
                          className='form-control'
                          style={{ width: 500 }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col-md-3 col-sm-4">
                        <label htmlFor="image">Upload Product Image</label>
                        <input
                          type="file"
                          name="image"
                          accept="image/*"
                          onChange={handleChange}
                          className='form-control'
                          style={{ width: 500 }}
                        />
                      </div>
                    </div>
                    {error && <div className="alert alert-danger mt-2">{error}</div>}
                    <div className='d-flex justify-content-end py-2'>
                      <button type="submit" className='btn btn-sm btn-success'>Add Product</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
