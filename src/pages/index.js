import React from 'react'
import { openDB } from '../lib/openDB'
import Principal from '../components/Principal'
import QuizBackground from '../components/quizBackground'
import GitHubCorner from '../components/GitHubCorner'
import Head from 'next/head'


export default function Home({ posts }) {
 
  return (
    <QuizBackground backgroundImage={'https://64.media.tumblr.com/07618a872b4fdd875bdac7b50525311b/tumblr_p32hadVNHX1wkdn9no1_1280.png'}>
       <Head>
        <title>Qual Titã você seria em Attack on Titan?</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      {posts.map((post, index) => (
        <Principal key={index} post={post}></Principal>
      ))}
      <GitHubCorner projectUrl="https://github.com/Matheus153"/>
    </QuizBackground>    
  )  
}
export async function getServerSideProps(context) {
  /*
  * Implementar as buscas dos dados no MongoDB
  */
  const db = await openDB()
  const data = await db.collection('dados').find().toArray()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  }
}
