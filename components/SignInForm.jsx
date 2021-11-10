import { Row, Col, Button } from 'react-bootstrap'
import Styles from '../styles/Auth.module.css'

const SignInForm = () => {
    
const SignInManualHandler = () => {
    
    if(!email || !password) {
        setError('Please fill all the fields')
    } else {
        setError('')
        console.log(email, password)
    }
        e.preventDefault()
        const formData = e.detail.formData
        const submitBtn = document.querySelector('.submit-btn')
        submitBtn.setAttribute('loading', '')    
        
        // sign in using Auth    
        Auth.signIn(formData, () => {
          submitBtn.removeAttribute('loading')
        })
      }


    return (
        <Row>
            <Col md={6}>
                <div className={Styles.AuthText}>
                    <h1>Welcome Back</h1>
                    <p>To keep connected with us please login with your personal info</p>
                </div>
            </Col>
            <Col md={6}>
                <form className={Styles.AuthForm}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Username/Email:</label>
                        <input type="email" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" className="form-control" placeholder="" required toggle-password/>
                    </div>
                    <div className="mb-3">
                        <a>Forgot your password?</a>
                    </div>
                    <div className="mt-4">
                        <Button onClick={SignInManualHandler} className="submit-btn" variant="primary" size="lg">
                            Sign In
                        </Button>
                    </div>
                </form>
            </Col>
        </Row>
    )
}

export default SignInForm