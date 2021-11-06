import Head from 'next/head'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import Layout from './components/Layout'
import Styles from '../styles/Shop.module.css'

export default function Shop() {

    const settings = {
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500
    }

	return (
		<Layout>
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

			<section className={Styles.ShopSection}>
				<Container>
                    <div className={Styles.FormContainer}>
                        <Form>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className={Styles.Mb}>
                                        <Form.Label>Shop</Form.Label>
                                        <Form.Select size="lg">
                                            <option>All</option>
                                            <option>Dress</option>
                                            <option>Top</option>
                                            <option>Bottom</option>
                                            <option>Jumpsuit</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Label>Collection</Form.Label>
                                    <Form.Select size="lg">
                                        <option>All</option>
                                        <option>Dress</option>
                                        <option>Top</option>
                                        <option>Bottom</option>
                                        <option>Jumpsuit</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form>
                    </div>
				</Container>
                <Container fluid>
                    <div className={Styles.ProductContainer}>
                        <Slider {...settings}>
                            <div className={Styles.Slide}>
                                <img src="/img/shop-demo-item.jpg" alt="item"/>
                                <div className={Styles.TagContainer}>
                                    <div>
                                        <h3>Muna</h3>
                                        <p className={Styles.CollectionName}>Oasis Collection</p>
                                    </div>
                                    <div>
                                        <p className={Styles.Price}>Rs 1499</p>
                                        <a className="btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.Slide}>
                                <img src="/img/shop-demo-item.jpg" alt="item" />
                                <div className={Styles.TagContainer}>
                                    <div>
                                        <h3>Muna</h3>
                                        <p className={Styles.CollectionName}>Oasis Collection</p>
                                    </div>
                                    <div>
                                        <p className={Styles.Price}>Rs 1499</p>
                                        <a className="btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.Slide}>
                                <img src="/img/shop-demo-item.jpg" alt="item" />
                                <div className={Styles.TagContainer}>
                                    <div>
                                        <h3>Muna</h3>
                                        <p className={Styles.CollectionName}>Oasis Collection</p>
                                    </div>
                                    <div>
                                        <p className={Styles.Price}>Rs 1499</p>
                                        <a className="btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.Slide}>
                                <img src="/img/shop-demo-item.jpg" alt="item" />
                                <div className={Styles.TagContainer}>
                                    <div>
                                        <h3>Muna</h3>
                                        <p className={Styles.CollectionName}>Oasis Collection</p>
                                    </div>
                                    <div>
                                        <p className={Styles.Price}>Rs 1499</p>
                                        <a className="btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.Slide}>
                                <img src="/img/shop-demo-item.jpg" alt="item" />
                                <div className={Styles.TagContainer}>
                                    <div>
                                        <h3>Muna</h3>
                                        <p className={Styles.CollectionName}>Oasis Collection</p>
                                    </div>
                                    <div>
                                        <p className={Styles.Price}>Rs 1499</p>
                                        <a className="btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.Slide}>
                                <img src="/img/shop-demo-item.jpg" alt="item" />
                                <div className={Styles.TagContainer}>
                                    <div>
                                        <h3>Muna</h3>
                                        <p className={Styles.CollectionName}>Oasis Collection</p>
                                    </div>
                                    <div>
                                        <p className={Styles.Price}>Rs 1499</p>
                                        <a className="btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
			</section>
		</Layout>
	)
}
