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
