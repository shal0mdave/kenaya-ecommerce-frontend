import { Col, Container, Row } from 'react-bootstrap'
import Layout from './components/Layout'
import Styles from '../styles/About.module.css'

export default function About() {
	return (
		<Layout>
			<section className={Styles.AboutSection}>
				<Container>
					<Row>
						<Col md={5}>
							<div className={Styles.CardContainer}>
								<div className={Styles.Card}>
									<div className={Styles.FrontCard}></div>
									<div className={Styles.BackCard}>
										<p className={Styles.BackText}> Hello, my name is Kany and I am the founder and manager of Kenaya concept store. </p>
										<p className={Styles.BackText}> I am passionate about fashion, and Mauritius has a plethora of talented small retailer businesses that deserve to be recognized for their outstanding work.</p>
										<p className={Styles.BackText}> Please contact us if you are interested in collaborating or empowering those retailers. We are always looking for new ways to help small businesses. </p>
									</div>
								</div>
							</div>
						</Col>
						<Col md={7}>
							<h1 className={Styles.AboutTitle}>About Us</h1>
							<p className={Styles.AboutText}>Our feet are deeply planted in our local community. We use our resources to empower & employ local retailers to break through. Kenaya is an entirely Mauritius-made brand. Our micro collection consists of products in quantities of no more than 5 or 8 pieces, with sizes ranging from S to XL. Our goal is to avoid overproduction while also allowing everyone to be unique in their clothing choices.</p>
							<p className={Styles.AboutText}>Working closely with our suppliers, we use certified 100% organic products. We also love ongoing support and hope, you’ve enjoyed some of our latest designs and value-driven efforts to give back in these challenging times. Each purchase is hand packed with loads of love from our small team .We sealed with 100% recycled paper stickers and sent in biodegradable bags. </p>
							<p className={Styles.AboutText}>The main vision of Kenaya was to develop clothing brand  which is based upon the transformation of ideas about everyday clothes and a new look at freedom of expression. </p>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	)
}
