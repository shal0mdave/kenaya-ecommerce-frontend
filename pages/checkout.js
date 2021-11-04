import { Col, Container, Row, Button, Table } from 'react-bootstrap'
import Layout from './components/Layout'
import Styles from '../styles/Checkout.module.css'
import { Bin } from './components/icons'

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
                                            <img className={Styles.ProductImage} src="./img/ZinniaDress.jpg"></img>
                                        </td>
                                        <td>Zinnia Dress </td>
                                        <td>Size: S</td>
                                        <td>Quantity: 1</td>
                                        <td>Total </td>

                                        </tr>

                                        <tr>
                                        <td>
                                        <img className={Styles.ProductImage} src="./img/JasminePlaysuit2.jpg"></img>
                                        </td>
                                        <td>Jasmine Playsuit </td>
                                        <td> Size:M </td>
                                        <td>Quantity: 1</td>
                                        <td>Total </td>
                                        </tr>

                                        <tr>
                                        <td>
                                        <img className={Styles.ProductImage} src="./img/AtagaPants3.jpg"></img>
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
                                        <td>Name : xxxx </td>
                                        <td>Email: xxxx@gmail.com</td>
                                        </tr>

                                        <tr>
                                        <td>Mobile: xxxxxxx </td>
                                        <td>Adresss xxxxxxxxxxx</td>
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
                                        <td>Name On Card</td>
                                        <td>xxxxxxxxxxxxxx</td>
                                        </tr>

                                        <tr>
                                        <td>Card Number</td>
                                        <td>xxxxxxxxxxxxxx</td>
                                        </tr>

                                        <tr>
                                        <td>Valid Through</td>
                                        <td>xxxxxxxxxxxxxx</td>
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
    