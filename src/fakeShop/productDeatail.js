import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/action/productActions";
import axios from "axios";

const ProductDetail = () => {
  const { productId } = useParams();
  const productdetail = useSelector(state => state.ProductDetail);
//console.log(product)
  const dispatch = useDispatch();
  const fetchDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
     
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchDetails();
    console.log(productdetail)
  }, [productId]);
  return (
    <>
      {/* {product ? (
        <h2>...loading</h2>
      ) : (
        <div>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta price">${product.price}</div>
                <div className="meta">{product.category}</div>
                <div className="meta">{product.description}</div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ProductDetail;
