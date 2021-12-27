import React,{useEffect} from "react";
import {useDispatch, useSelector } from "react-redux";
import ProductComponent from "./productComponent";
import { setproducts } from "../redux/action/productActions";
import axios from "axios";


const ProductListing=()=>{
    const products=useSelector(state => state);
    const dispatch=useDispatch();
    const fetchProducts= async()=>{
        const response= await axios.get('https://fakestoreapi.com/products').catch((error)=>{console.log("error is"+ error)})
        dispatch(setproducts(response.data));
    }
    useEffect(()=>{
        fetchProducts();
         
         console.log(products.allProducts)
    },[]);

    return(
        <div className="ui grid container">
   <ProductComponent/>
        </div>
    );
};

export default ProductListing;