/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../screens/Quiz';
import { openDB } from '../../lib/openDB'

export default function QuizDaGaleraPage({ dbExterno }) {
  // const [db, setDb] React.useState({})
  // React.useEffect(() => {
  // });
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
    // {/* <pre style={{ color: 'black' }}>
    //   {JSON.stringify(dbExterno.questions, null, 4)}
    // </pre> */}
  );
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