import React from 'react'

export const Products = () => {


    const product = {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        // thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
        ]
      };

      

  return (
    <div className="product">
         <div className="product-details">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
   
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
    <div className="product-images">
      {product.images.map((image, index) => (
        <img key={index} src={image} alt={product.title} />
      ))}
    </div>
  </div>
  )
}



