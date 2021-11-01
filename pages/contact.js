import { Col, Container, Row , Form, Button} from 'react-bootstrap'
import Layout from './components/Layout'
import Styles from '../styles/Contact.module.css'
import Phone from './components/icons/Phone'
import Email from './components/icons/Email'
import Place from './components/icons/Place'

export default function Contact (){
    return(
        <Layout>
            <section className={Styles.ContactSection}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className={Styles.Feature}>
                                <Phone/>
                            <h6>Number</h6>
                            <p>+230 5476 8989</p>
                            </div>

                        </Col>
                        <Col md={4}>
                            <div className={Styles.Feature}>
                            <Email/>
                            <h6>Email</h6>
                            <p>info@kenaya.com </p>
                            </div>
                            
                        </Col>
                        <Col md={4}>
                            <div className={Styles.Feature}>
                            <Place/>
                            <h6>Location</h6>
                            <p> Quatre Borne Palma Mauritius</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="textarea"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea"rows={3} />
                            </Form.Group>

                            <Button  type="submit">Submit</Button>
                        </Form>
                    </Row>
                </Container>
            </section>
        </Layout>
    )

}

