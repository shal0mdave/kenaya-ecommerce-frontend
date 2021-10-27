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
							image goes here
						</Col>
						<Col md={7}>
							text goes here
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	)
}
