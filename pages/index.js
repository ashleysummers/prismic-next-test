import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Prismic from 'prismic-javascript'
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { apiEndpoint, client } from '../prismic-configuration'

console.log(apiEndpoint)
//import { client } from '../utils/prismicPosts'
//import Post from '../components/Post';

export default function Home(props) {
  return (
    <div>
      <img src={props.home.data.image.url} alt="avatar image" height="140px" />
      <h1>{RichText.asText(props.home.data.headline)}</h1>
      <p>{RichText.asText(props.home.data.description)}</p>

      <ul>
        {props.posts.results.map((post) => (
          <li key={post.uid}>
          <Link href="posts/[id]" as={`/posts/${post.uid}`}>
             <a>{RichText.asText(post.data.title)}</a>
           </Link>
      </li>
        ))}
      </ul>
    </div>    
  )
  
}

// at the bottom of your component file
export async function getStaticProps() {  
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  // const res = await client.query('');
  //const res = await client.query('[at(document.type, "post")]')
  const home = await client.getSingle("blog_home")

  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'post'), {
      orderings: '[my.post.date]'
    }
  )

  return {
    props: {
      home,
      posts,
    },
  }
}