import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderingList = products.map((product) => {
        const {id, title, price, image, category} = product;
        return(
            <>
            <div className="four coloum wide" key={id}>
                <Link to= {`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title}></img>
                        </div>
                        <div className="content">
                            <div className="header center">{title}</div>
                            <div className="meta center">{category}</div>
                            <div className="meta price center">Rs. {price}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </>
        )
    })
    
    return(
       <>{renderingList}</>
    )
}

export default ProductComponent;