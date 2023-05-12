import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../Redux/Actions/ProductAction";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {image, title, category, price, description} = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err);
        });
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
      if(productId && productId !== '') fetchProductDetail();
      dispatch(removeSelectedProduct());
    }, [productId]);

    return(
        <div className='ui grid container'>
             {Object.keys(product).length === 0 ? (
        <div>...Loading, Please Wait</div>
       ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" alt={title} src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">Rs. {price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       )}
    </div>
    );
};

export default ProductDetail;