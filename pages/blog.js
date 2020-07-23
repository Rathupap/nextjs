import Layout from './../components/Layout';
import Link from 'next/link';

const posts = [
    {
        title: "React Native",
        content: "React NativeLorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid vero \
        inventore mollitia tempora et ducimus, natus ratione doloribus omnis eaque, veritatis \
        odit recusandae labore fuga aut, officia nihil voluptatibus earum suscipit cumque cum excepturi \
        amet? Quae quaerat velit nulla."
    },{
        title: "Next JS",
        content: "Next JS Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid vero \
        inventore mollitia tempora et ducimus, natus ratione doloribus omnis eaque, veritatis \
        odit recusandae labore fuga aut, officia nihil voluptatibus earum suscipit cumque cum excepturi \
        amet? Quae quaerat velit nulla."
    },{
        title: "Product Management",
        content: "Product ManagementLorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid vero \
        inventore mollitia tempora et ducimus, natus ratione doloribus omnis eaque, veritatis \
        odit recusandae labore fuga aut, officia nihil voluptatibus earum suscipit cumque cum excepturi \
        amet? Quae quaerat velit nulla."
    }
]

const Blog = () => {

    const PostLink = ({content, title}) => {

        const url = `/post?title=${title}&content=${content}`;
        const slug = title.replace(" ", "-").toLowerCase();

        return (
            <ul>
                <li><Link as={`/${slug}`} href={url}><a>{title}</a></Link></li>
            </ul>
        )

    }

    return (
        <Layout title="Blog">
            {
                posts.map((post) => <PostLink key={post.title} title={post.title} content={post.content}/>)
            }
        </Layout>
    )

}


export default Blog;