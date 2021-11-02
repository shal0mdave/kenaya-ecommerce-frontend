import { Row, Col, Button } from 'react-bootstrap'
import Styles from '../../styles/User.module.css'
import { GoogleSignIn, FacebookSignIn  } from './icons'

const SignUpForm = () => {
    return (
        <Row>
            <Col md={6}>
                <div className={Styles.AuthText}>
                    <h1>Create Account</h1>
                    <div className={Styles.AuthMethods}>
                        <a>
                            <GoogleSignIn />
                        </a>
                        <a>
                            <FacebookSignIn/>
                        </a>
                    </div>
                    <p>Use your email for registration</p>
                </div>
            </Col>
            <Col md={6}>
                <form className={Styles.AuthForm}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="name" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile:</label>
                        <input type="mobile" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Password:</label>
                        <input type="password" className="form-control" placeholder="" />
                    </div>
                    <div className="mt-4">
                        <Button variant="primary" size="lg">
                            Sign Up
                        </Button>
                    </div>
                    <div class="mt-4 form-check">
                        <input class="form-check-input" type="checkbox" value="" name="tc" checked />
                        <label class="form-check-label" htmlFor="tc">I agree with Term &amp; Conditions</label>
                    </div>
                </form>
            </Col>
        </Row>
    )
}

export default SignUpForm