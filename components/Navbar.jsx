import Link from 'next/link'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Bag, Profile, Search } from './icons'
import Styles from '../styles/Navbar.module.css'

const Navigation = () => {
    return (
        <Navbar className={Styles.Nav} collapseOnSelect expand="lg" variant="light" >
            <Container>
                <Navbar.Brand href="/">
                    <img src="/img/logo.png" className={Styles.Logo} alt="Kenaya" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link href="/">
                            <a className={Styles.NavLink}>Home</a>
                        </Link>
                        <Link href="/about">
                            <a className={Styles.NavLink}>About</a>
                        </Link>
                        <Link href="/collection">
                            <a className={Styles.NavLink}>Collection</a>
                        </Link>
                        <Link href="/shop">
                            <a className={Styles.NavLink}>Shop</a>
                        </Link>
                        <Link href="/contact">
                            <a className={Styles.NavLink}>Contact</a>
                        </Link>
                    </Nav>

                    <Nav>
                        <Link href="/cart">
                            <a className={Styles.NavLink}><Bag /></a>
                        </Link>
                        <Link href="/auth">
                            <a className={Styles.NavLink}><Profile /></a>
                        </Link>
                        <Link href="/search">
                            <a className={Styles.NavLink}><Search /></a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation