import Link from 'next/link'
import { Navbar, Container, Nav, } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import Styles from '../styles/Usernavbar.module.css'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

const UserNavigation = () => {
    const dispatch = useDispatch()
    const { query } = useRouter();
    const [user, setUser] = useState({
        id: '',
        name: '',
        phone: '',
        birthday: '',
        email: '',
        city: '',
        state: '',      
        adress: '',
        adress2: '',
        imageUrl: '',
        zip: ''
    })
    
    useEffect(() => {

        if (query.id && user) {

            usersService.get(query.id)
            .then(res => {
                // console.log(res.data)
                serUser(res.data)
            })
            .catch(err => {
                toast.error("Failed to load user");
                console.log(err)
            })
        } 

    },[query.id])

    const onSaveChangesClick  = async() => {
        await dispatch(saveUser({
            id: uuidv4(),
            name: user.name,
            phone: user.phone,
            birthday: user.birthday,
            email: user.email,
            adress: user.adress,
            adress2: user.adress2,
            imageUrl: user.image,
            zip: user.zip
        }))
        toast.success("User Info Save")
    }


    return (
        <Navbar className={Styles.Nav} collapseOnSelect expand="lg" variant="light" >
            <Container>
                <Navbar.Brand href="/">
                    <div className={Styles.ImageContainer}>
                        <img src={user.imageUrl} alt={user.name} />
                    </div>
                    <div className={Styles.UserName}>
                    <h3 className={Styles.Name}>{user.name}</h3>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link href="/myorders">
                            <a className={Styles.NavLink}>My Orders</a>
                        </Link >
                        <Link href="/mydetails">
                            <a className={Styles.NavLink}>My Details</a>
                        </Link>
                        <Link href="/cards">
                            <a onClick={() => toast.info('Cards Feature coming soon')} className={Styles.NavLink}>Cards</a>
                        </Link>
                        <Link href="/wishlist">
                            <a onClick={() => toast.info('Wishlists Feature coming soon')}  className={Styles.NavLink}>Whishlit </a>
                        </Link>
                            <button  className={Styles.Logout}>Logout </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default  UserNavigation 
