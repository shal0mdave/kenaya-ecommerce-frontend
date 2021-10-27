import { Fragment  } from 'react';
import Head from 'next/head';
import Navbar from './Navbar'

const Layout = (props) => {

    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="author" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                <meta name="theme-color" content={props.themeColour || '#121212'} />
                <meta name="description" content={props.description || 'A wonderful Team of Website, Mobile App, eCommerce Developers at Your Service.'} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title || 'Welcome to Kenaya E-Store'} />
                <meta property="og:description" content={props.description || 'Online Shopping for the latest clothes and fashion.'} />
                <meta property="og:url" content={props.url || 'https://theindietrees.com/'} />
                <meta property="og:image" content={props.image || 'https://theindietrees.com/img/ship.png'} />

                <title>{props.title || 'Welcome to Kenaya E-Store'}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {props.children}
        </Fragment>
    )
}

export default Layout;