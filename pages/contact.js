<<<<<<< HEAD
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

=======
import { Col, Container, Row, Button } from 'react-bootstrap'
import Layout from './components/Layout'
import { Phone, Pin, Envelope } from './components/icons'
import Styles from '../styles/Contact.module.css'

export default function Contact() {
	return (
		<Layout>
			<section className={Styles.ContactSection}>
				<Container>
					<Row>
						<Col md={4}>
							<div className={Styles.Details}>
                                <Phone />
                                <h1>Phone</h1>
                                <p>+23067676</p>
                            </div>
						</Col>
                        <Col md={4}>
                            <div className={Styles.Details}>
                                <Envelope />
                                <h1>Email</h1>
                            </div>
						</Col>
                        <Col md={4}>
                            <div className={Styles.Details}>
                                <Pin />
							    <h1>Location</h1>
                            </div>
						</Col>
					</Row>
                    
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <div className={Styles.Form}>
                                <h1>IF YOU GOT ANY QUESTIONS/QUERIES PLEASE DO NOT HESITATE TO SEND A MESSAGE </h1>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>

                                {/* ... */}

                                <Button variant="primary" size="lg">
                                    Send Message
                                </Button>
                            </div>
                        </Col>
                    </Row>
				</Container>
			</section>
		</Layout>
	)
}
>>>>>>> c341d765ba2d547cdd2e9e5e3718e2ae6589c240
