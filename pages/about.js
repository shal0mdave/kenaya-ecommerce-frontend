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
							<img src="/img/logo.png" className={Styles.Logo} alt="About Kenaya" />
						</Col>
						<Col md={7}>
							<p className={Styles.AboutText}>text goes here</p>
							<p className={Styles.AboutTextTwo}>text goes here</p>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	)
}
