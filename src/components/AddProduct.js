import React from 'react';
import { NavLink } from 'react-router-dom';

import { useState } from 'react';



const AddProduct = () => {
    const [name,setName]= useState("");
    const[price ,setPrice]=useState(0);
    const [description,setDescription]=useState('');

    const addProduct =async(e) => {
      e.preventDefault();
      const pro={name , price, description}
       console.warn(pro)
       
   let result= await fetch("http://localhost:5000/add",{
    method:"POST",
    body:JSON.stringify(pro),
    
    Headers:{ "Content-type":"application/json"}
  });
  result=await result.json();
  console.warn(result);


 }
  return (
   <>
   <form  method='POST'>
    <h1>Add Product:</h1>
    <label> name of product:</label>
    <input type="text"   onChange={(e) => setName(e.target.value)}value={name}></input>
    <label> price of product:</label>
    <input type="text"   onChange={(e) => setPrice(e.target.value)}value={price}></input>
    <label> description of product:</label>
    <input type="text"   onChange={(e) => setDescription(e.target.value)}value={description}></input>

    <NavLink onClick={addProduct}>Add Product</NavLink>
    </form>
    </>
  )
};

export default AddProduct;