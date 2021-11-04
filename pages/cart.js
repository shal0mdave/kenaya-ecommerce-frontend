import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import Layout from './components/Layout'
import Styles from '../styles/Cart.module.css'
import { Bin } from './components/icons'



export default function Cart(){

return(
    <Layout>
        <section className={Styles.CartSection}>
            <Container>
                <Row>
                <div className={Styles.Title}>
                            <h6> My Cart</h6>
                        </div>
                    <Table className={Styles.Product} responsive = "md" >
                        <thead className={Styles.TableHead}>
                            <tr>
                            <th >Items</th>
                            <th>Descirption</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Final Price</th>
                            <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td > 
                                <img className={Styles.ProductImage} src="./img/ZinniaDress.jpg"></img>
                            
                            </td>
                            <td>Zinnia Dress </td>
                            <td>S</td>
                            <td>
                                <div>
                                    <input className={Styles.Input} type="number" value="1" min="0" max="8"></input>
                                </div>
                            </td>
                            <td>Price</td>
                            <td>Total </td>
                            <td> <Button variant=""><Bin/></Button>{' '} </td>
                            </tr>
                            <tr>
                            <td>
                            <img className={Styles.ProductImage} src="./img/JasminePlaysuit2.jpg"></img>
                            </td>
                            <td>Jasmine Playsuit </td>
                            <td>M </td>
                            <td> 
                                <div>
                                    <input className={Styles.Input} type="number" value="1" min="0" max="8"></input>
                                </div>
                            </td>
                            <td>Price</td>
                            <td>Total </td>
                            <td> <Button variant=""><Bin/></Button>{' '} </td>
                            </tr>
                            <tr>
                            <td>
                            <img className={Styles.ProductImage} src="./img/AtagaPants3.jpg"></img>
                            </td>
                            <td>Ataga Pant </td>
                            <td>L </td>
                            <td>
                                <div>
                                    <input className={Styles.Input} type="number" value="1" min="0" max="8"></input>
                                </div>
                            </td>
                            <td>Price</td>
                            <td>Total </td>
                            <td> <Button variant=""><Bin/></Button>{' '} </td>
                            </tr>
                        </tbody>
                    </Table>
                    </Row>
                    <Row className={Styles.Payment}>
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
                    </Row>
                
                <Row>
                    <Col>
                    <Button  variant=""  className={Styles.ContinueShop}> Continue To Shop</Button>
                    <Button  variant=""  className={Styles.Pay}>Pay</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
)
}