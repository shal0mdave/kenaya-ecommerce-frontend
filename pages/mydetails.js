import { Col, Container, Row, Button, Table, Form } from 'react-bootstrap'
import Layout from '../components/Layout'
import Styles from '../styles/Mydetails.module.css'


export default function Mydetails() {
	return (
        <Layout>
            <section className={Styles.MydetailsSection}>
                <Container>
                    <Row>
                        <Col md={5}>
                        
                        </Col>

                        <Col  md={7}>
                            <div className={Styles.Title}>
                                <h3> My Details</h3>
                            </div>
                            <div className={Styles.Form}>
                            <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridBirthday">
                            <Form.Label>Birtday</Form.Label>
                            <Form.Control type="name" placeholder="dd/mm/yyyy" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Select...</option>
                                <option value="B">Belgium</option>
                                <option value="C">Congo</option>
                                <option value="CA">Canada</option>
                                <option value="I">Italia</option>   
                                <option value="M">Mauritius</option>
                                <option value="S">Spain</option>
                                <option value="U">USA</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                    </Form>
                                
                            </div>

                                {/* ... */}
                                <Button variant="primary" type="submitg">
                                    Save Changes
                                </Button>
                            
                        </Col>
                    </Row>



                </Container>
            </section>
        </Layout>

        )
    }
    