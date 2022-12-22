import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddProduct from './components/AddProduct';


function App() {
  // const [products, setProducts]= useState()
  // const [id, setId]= useState()

  // const handleClick =() =>{
  //   setId(id)
  // }

  // useEffect(() => {
  //   axios.get("http://localhost:5000/products").then(res => {
  //     setProducts(res.data)
  //     console.log(res.data)
  //   });
  // }, [id])



  return (
    <div className="App">
      {/* <h1>Enter Products ID :</h1>
      < input type= 'text'  value={id} placeholder="please enter the number" onChange={e => 
      setId(e.target.value)}></input>
      <button type='button' onClick={handleClick}>Fetch product</button> */}

      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddProduct/>} />
      </Routes>
      </BrowserRouter>
      

      
       
          
      
      
      {/* {products ? (
        products.map((product) => (
          <>
            <p>name: {product.name}</p>
            
            <p>price: {product.price}</p>
            </>
        ))
      ) : (
        <h2>Loading</h2>
      )} */}

      </div>
  );
}
export default App;