import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from './../components/Layout';
import PageNotFound from './_error';

const About = ({ user, err }) => {
    if(err){

        return <PageNotFound />

    }
    return (
        <Layout title="About Us">
            <p>The about page</p>
            {
                user && <div>
                    <img src={user.avatar_url} alt="Prince Rathupa"/>
                    <h2><strong>Name:</strong> {user.name}</h2>
                    <p><strong>Location:</strong> {user.location}</p>
                    <p><strong>Website:</strong> <a href={user.blog}>{user.blog}</a></p>
                </div>
            }
            <Link href="/"><img src="/static/indulger.logo.png" alt="Indulger App Logo"/></Link>
            <style jsx>
            {
                `
                img {
                    width: 140px;
                }
                `
            }
            </style>
        </Layout>
    )
}

About.getInitialProps = async () => {
    try{
        const response = await fetch("https://api.github.com/users/rathupap");
        const user = await response.json();
        return {user}

    }

    catch(err){
        console.log(err)
        return {err}
    }
    
}

export default About