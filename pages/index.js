import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Prismic from 'prismic-javascript'
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { apiEndpoint, client } from '../prismic-configuration'
import Layout from '../components/Layout'

console.log(apiEndpoint)
//import { client } from '../utils/prismicPosts'
//import Post from '../components/Post';
import CTAHero from '../components/CTAHero'
import HeroHeadline from '../components/HeroHeadline'
import WorkCTA from '../components/WorkCTA'

export default function Home(props) {
  //let cta_hero = props.lokion_home.data.body.find(slice => slice.slice_type == 'hero_cta');
  //console.log(cta_hero);
  const document = props.lokion_home;
  console.log(document);

  const pageContent = document.data.body.map( (slice,index) => {
      if (slice.slice_type === 'hero_cta') {
        return (
          <CTAHero 
            headline={slice.primary.headline[0].text} 
            tagline={slice.primary.tagline[0].text}
            ctaText={slice.primary.cta_text[0].text}
            ctaLink={slice.primary.cta_link.url}
            backgroundImage={slice.primary.background_image}
            ctaBoxColor={slice.primary.cta_box_color}/>
        )        
      }

      if (slice.slice_type === 'hero_headline') {
          return (
            <HeroHeadline 
              headline={slice.primary.headline[0].text} 
              tagline={slice.primary.tagline[0].text}
            />
          )
      }

      if (slice.slice_type === 'work_cta') {
        return (
          <WorkCTA 
            ctaText={slice.primary.cta_button_text[0].text}
            ctaLink={slice.primary.cta_link.url}
            clientName={slice.primary.client_name[0].text}
            workDescription={slice.primary.work_description[0].text}
            workSummary={slice.primary.work_summary[0].text}
            clientImage={slice.primary.client_image}
            imageAlignment={slice.primary.image_alignment}/>
        )
      }
  });

  return (
    <Layout>
      <Head>
        <title>Index page</title>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      {pageContent}
      {/*cta_hero && 
      <CTAHero 
        headline={cta_hero.primary.headline[0].text} 
        tagline={cta_hero.primary.tagline[0].text}
        ctaText={cta_hero.primary.cta_text[0].text}
        ctaLink={cta_hero.primary.cta_link.url}
        backgroundImage={props.lokion_home.background_image}
        ctaBoxColor={props.lokion_home.cta_box_color}/>
      */}

{/*
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
        */}
    </Layout>    
  )
  
}

// at the bottom of your component file
export async function getStaticProps() {  
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  // const res = await client.query('');
  //const res = await client.query('[at(document.type, "post")]')
  const home = await client.getSingle("blog_home")

  const lokion_home = await client.getSingle("home_page");
  console.log(lokion_home.data);
  
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'post'), {
      orderings: '[my.post.date]'
    }
  )

  return {
    props: {
      home,
      lokion_home,
      posts,
    },
  }
}