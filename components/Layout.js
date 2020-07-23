import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => {
    return (
        <div className="root">
            <Head>
                <title>Indulger App - { title }</title>
            </Head>
            <div className="nav">
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/resume"><a>Resume</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                </ul>
            </div>
            <h1>{title}</h1>
            {children}
            <div>
                <p>
                    Copyright &copy; 2020 | All Rights Reserved
                </p>
            </div>

            <style jsx>
                {
                    `

                    .root {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }

                    .nav > ul {
                        display: flex;
                        justify-content: space-around;
                    }

                    .nav li {
                        list-style: none;
                        margin-left: 1rem;
                    }

                    .nav a {
                        color: #51c2b8;
                        text-decoration: none;
                    }
            
                    `
                }
             </style>
        </div>
    )
}

export default Layout;