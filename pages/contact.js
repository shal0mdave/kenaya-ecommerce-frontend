import { Col, Container, Row, Button } from 'react-bootstrap'
import Layout from '../components/Layout'
import { Phone, Pin, Envelope } from '../components/icons'
import Styles from '../styles/Contact.module.css'

export default function Contact() {
	return (
		<Layout>
			<section className={Styles.ContactSection}>
				<Container>
					<Row>
                        <div className={Styles.Title}>
                            <h3>Contact</h3>
                        </div>
						<Col md={4} className={Styles.Details } >
							<div className={Styles.Lines} >
                                <Phone />
                                <h6>Phone</h6>
                                <p>+230 5476 8989</p>
                            </div>
                        
						</Col>
                        <Col md={4}className={Styles.Details}>
                            <div  className={Styles.Lines} >
                                <Envelope />
                                <h6>Email</h6>
                                <div></div>
                                <p>info@kenaya.com </p>
                            </div>

						</Col>
                        <Col md={4} className={Styles.Details}>
                            <div className={Styles.NoLines} >
                                <Pin />
							    <h6>Location</h6>
                                <p>Quatre Borne Palma Mauritius</p>
                            </div>
                           
						</Col>
					</Row>
                    
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <div className={Styles.Form}>
                                <h1>IF YOU GOT ANY QUESTIONS/QUERIES PLEASE DO NOT HESITATE TO SEND A MESSAGE </h1>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" className="form-control" placeholder=""  required/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="text" className="form-control" placeholder=""  required/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message:</label>
                                    <textarea className="form-control"type="text" name="message" placeholder="" required></textarea>
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
