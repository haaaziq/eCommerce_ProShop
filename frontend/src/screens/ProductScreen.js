import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Image, Col, Card, ListGroup, Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import {listProductDetails} from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

// to get :id from url use => props.match.params.id OR useParams() hooks
// Use it to access match.params
const ProductScreen = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const productDetails = useSelector(state => state.productDetails);
    const {loading, product, error} = productDetails;

    useEffect(()=>{
        dispatch(listProductDetails(id));    
    },[dispatch, id]);

    return (
    <>
        <Link to={'/'}>
            <Button variant='light'>Go Back</Button>
        </Link>
        
        {loading ? <Loader />
                 : error ?
                 <Message children={error} variant="danger" />
                 :  
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid/>
                    </Col>
        
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} />{product.numReviews}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
        
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                        </Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status:
                                        </Col>
                                        <Col>
                                            {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-grid'>
                                    <Button type='button'>Add to Cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
        }
    </>
  )
}

export default ProductScreen;