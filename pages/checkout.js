import { Col, Container, Row, Button, Table } from 'react-bootstrap'
import Layout from '../components/Layout'
import Styles from '../styles/Checkout.module.css'

export default function Contact() {
	return (
        <Layout>
            <section className={Styles.CheckoutSection}>
                <Container>
                    <Row>
                        <Col  md={5}>
                            <div className={Styles.Title}>
                                <h6> Checkout</h6>
                            </div>
                            <div className={Styles.Details}> 
                                <Table className={Styles.Order} responsive = "md" >
                                    <thead className={Styles.TableHead}>
                                        <tr>
                                        <th >Your Order</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td > 
                                            <img className={Styles.ProductImage} src="./img/ZinniaDress.jpg" alt="ZinniaDress" />
                                        </td>
                                        <td>Zinnia Dress </td>
                                        <td>Size: S</td>
                                        <td>Quantity: 1</td>
                                        <td>Total </td>

                                        </tr>

                                        <tr>
                                        <td>
                                        <img className={Styles.ProductImage} src="./img/JasminePlaysuit2.jpg" alt="JasminePlaysuit" />
                                        </td>
                                        <td>Jasmine Playsuit </td>
                                        <td> Size:M </td>
                                        <td>Quantity: 1</td>
                                        <td>Total </td>
                                        </tr>

                                        <tr>
                                        <td>
                                        <img className={Styles.ProductImage} src="./img/AtagaPants3.jpg" alt="Ataga Pants" />
                                        </td>
                                        <td>Ataga Pant </td>
                                        <td>Size:L </td>
                                        <td>Quantity: 1</td>
                                        <td>Total </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table >
                                    <tr>
                                        <td>Subtotal:</td>
                                        <td>Rs .... </td>
                                    </tr>
                                    <tr>
                                        <td>Shipping:</td>
                                        <td>Rs O.OO</td>
                                    </tr>
                                    <tr>
                                        <td>Total:</td>
                                        <td>Rs ....</td>
                                    </tr>

                                </Table>
                                </div>
                        </Col>
                        <Col  md={5}>
                        
                                    <Table className={Styles.Product} responsive = "md" >
                                    <thead className={Styles.TableHead}>
                                        <tr>
                                        <th >Shipping Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <p>Name : xxxx </p>
                                        <p>Mobile: xxxxxxx </p>
                                       
                                        </tr>

                                        <tr>
                                       
                                        <p>Email: xxxx@gmail.com</p>
                                        <p>Adresss xxxxxxxxxxx</p>
                                        </tr>

                                        <Button  variant="" > Edit Info</Button>
                                        </tbody>
                                    </Table>

                                    <Table>
                                    <thead className={Styles.TableHead}>
                                        <tr>
                                        <th >Payment Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <p>Name On Card</p>
                                        <p>xxxxxxxxxxxxxx</p>
                                        </tr>

                                        <tr>
                                        <p>Card Number</p>
                                        <p>xxxxxxxxxxxxxx</p>
                                        </tr>

                                        <tr>
                                        <p>Valid Through</p>
                                        <p>xxxxxxxxxxxxxx</p>
                                        <td>CVC Code</td>
                                        <td>xxxxxxxxxxxxxx</td>
                                        </tr>

                                        <Button  variant="" >Change Card</Button>
                                        
                                    </tbody>

                                </Table>
                                <Button  variant="" > Cancel</Button>
                                <Button  variant="" > Pay</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>

        )
    }
    