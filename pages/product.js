import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { BsHeart } from 'react-icons'
import { toast } from 'react-toastify'
import Layout from '../components/Layout'
import Styles from '../styles/Product.module.css'

import  productsService from '../services/products.service'
import Checkout from '../components/stripe/Checkout'


export default function Product() {
    const { query } = useRouter();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        imageUrl: '',
        availableSizes: [],
        wearing: ''
    })
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {

        if (query.id) {

            productsService.get(query.id)
            .then(res => {
                // console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {
                toast.error("Failed to load product");
                console.log(err)
            })
        } 

    },[query.id])

	return (
		<Layout>
			<section className={Styles.ProductSection}>
                <Container>
                    <div className={Styles.ProductContainer}>
                        <Row>
                            <Col md={6}>
                                <div className={Styles.ImageContainer}>
                                    <img src={product.imageUrl} alt={product.name} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={Styles.Content}>
                                    <h3 className={Styles.Name}>{product.name}</h3>
                                    <p className={Styles.Collection}>Collection: {product.collection}</p>
                                    <p className={Styles.Price}>{product.currencyFormat} {product.price}</p>
                                    <p className={Styles.Description}>{product.description}</p>

                                    <div>
                                        <Form>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Label>Size:</Form.Label>
                                                    <Form.Select size="lg">
                                                        {product.availableSizes.map(size => ( <option key={size}>{size}</option> ))}
                                                    </Form.Select>
                                                </Col>

                                                <Col md={6}>
                                                <Button className={Styles.Wishlist}> <Heart />  Add to wishlist</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>

                                    <div className={Styles.ButtonGroup}>
                                        <Checkout
                                            label="Buy Now"
                                            className={Styles.Btn}
                                            name={'Kenaya E-market'}
                                            description={product.description}
                                            amount={product.price * 0.023}
                                        />
                                        <button className={Styles.Btn}>Add Cart</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
			</section>
		</Layout>
	)
}


// Product.getInitialProps = async ({query}) => {
//     return {query}
// }

