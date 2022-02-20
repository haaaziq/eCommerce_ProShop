import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
// since we are building SPA we will use Link provided by react-router-dom 
// instead of anchor tag for faster navigation
import { Link } from 'react-router-dom';

// taking product out from props
const Product = ({product}) => {
  return (
    <Card className='rounded my-3 p-2'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image}>
            </Card.Img>
        </Link>
        
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            
            <Card.Text as='div'>
                <div className='mt-3'>
                    <Rating value={product.rating}/>
                     {product.numReviews}
                </div>
            </Card.Text>

            <Card.Text as='h3'>
                <strong>${product.price}</strong>
            </Card.Text>

        </Card.Body>
    </Card>
  )
}

export default Product;