import React from "react";
 
const OrderProduct = ({ products }) => {
  console.log(products);
 
  const totalAmount = products.reduce((total, product) => {
    // Ensure sub_total is a number
    const productSubtotal = parseFloat(product.sub_total) || 0;
    return total + productSubtotal;
  }, 0);
 
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="jba-cart-product">
          <div className="p-pic">
            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${product.product_image}`}
              alt={product.product_name}
            />
          </div>
          <div className="product-dec">
            <h3 className="success-product-title">{product.product_name}</h3>
            <span className="sku">SKU: {product.product_sku_code}</span>
            <span className="p-price">
              ₹{product.amount}
              {product.oldPrice && (
                <span className="old-p">₹ {product.oldPrice}</span>
              )}
            </span>
          </div>
        </div>
      ))}
      <h3 className="total-amount-text text-right">
        Total Amount: ₹{totalAmount.toFixed(2)}
      </h3>
      <style jsx>{`
        .success-product-title {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};
 
export default OrderProduct;