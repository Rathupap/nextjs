import Layout from './../components/Layout';
import { withRouter} from 'next/router'

const Post = ({ router }) => {

    return (
        <Layout title={router.query.title}>
            <p>
                { router.query.content }
             </p>
        </Layout>
    )

}

export default withRouter(Post);