/* eslint-disable react/prop-types */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import Widget from '../../components/Widget';
 
import QuizBackground from '../../components/quizBackground';
import QuizContainer from '../../components/QuizContainer';
import AlternativesForm from '../../components/AlternativesForm';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';


import loadingAnimation from './animations/kakashi-load.json';

function ResultWidget({ results }) {

  const router = useRouter()
  let score = results.filter((result) => result).length;

  return (
    <Widget as={motion.section}
    transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
    variants={{
      show: {opacity: 1, y:'0'},
      hidden: {opacity: 0, y:'50%'}
    }}
    initial="hidden"
    animate="show">
      <Widget.Header>
        <h4>Resultado:</h4>
      </Widget.Header>
          {score === 9 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/blindado.jpg'}
          /> }

          {score === 9 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/carroceiro.jpg'}
          /> }

          {score === 8 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/Mandíbula.jpeg'}
          /> }

          {score === 7 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/blindado.jpg'}
          /> }

          {score === 6 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/Ataque.png'}
          /> }

          {score === 5 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/martelo.jpg'}
          /> }

          {score === 4 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/colossal.png'}
          /> }

          {score === 3 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/femea.jpg'}
          /> }

          {score === 2 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/fundador.jpeg'}
          /> }

          {score <= 1 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={'/image/bestial.jpg'}
          /> }


          
      <Widget.Content> 
         
        <h5 style= {{
          marginBottom: '25px',
          lineHeight: '1.1em',
          textAlign: 'center'
        }}>
          { score === 9 && `Titã Carroceiro`}
          { score === 9 && <p>Um titã que tem a capacidade de transportar grandes cargas. Tem a skill de usar uma armadura com artilharia pesada para grandes combates!</p>}

          { score === 8 && `Titã Mandíbula`}
          { score === 8 && <p>Um dos mais versáteis titãs. O Titã Mandíbula é extremamente ágil e possui a mordidade mais potente de todos os titãs.</p>}

          { score === 7 && `Titã Blindado`}
          { score === 7 && <p>Possui uma camada de extrema dureza em seu corpo, resistindo a grandes impactos e ataques de outros titãs. É um tanque de Guerra!</p>}

          { score === 6 && `Titã de Ataque`}
          { score === 6 && <p>Ele possui um grande poder onfesivo. Além de ter o poder de endurecimento também possui capacidade ter acesso as memórias de seus futuros portadores.</p>}

          { score === 5 && `Titã Martelo de Guerra`}
          { score === 5 && <p>Um dos mais completos titãs! O Martelo de Guerra pode criar qualquer arma com seu poder de endurecimento. Perfeito para combater qualquer tipo de ameaça!</p>}

          { score === 4 && `Titã Colossal`}
          { score === 4 && <p>O deus da destruição! Medindo 60 metros o Titã Colossal ao se transformar acarreta em uma enorme onda de energia que destrói tudo a sua volta. Também chamado de o titã da bicuda!</p>}

          { score === 3 && `Titã Fêmea`}
          { score === 3 && <p>Com extrema agilidade e habilidade de copiar as capacidades de outros titãs. A Titã Fêmea não só é um grande perigo como também consegue atrair outros titãs puros pelo seu chamado</p>}

          { score === 2 && `Titã Fundador`}
          { score === 2 && <p>O Titã fundador talvez seja um dos mais apelativos. Consegue controlar a vontade de outros Titãs devido ao poder do fundador, indicando caminhos e até mesmo mudando a composição biológica dos habitantes de Eldia</p>}

          { score <= 1 && `Titã Bestial`}
          { score <= 1 && <p>Consegue controlar a vontades dos titãs puros criados a parte do líquido de sua medula. Possui extrema precisão em seus lançamentos, sendo um dos mais difíceis de combater a longa distância.</p>}
          
          
        </h5>
        
        {/* <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              # 
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? ' Mandou bem!'
                : ' Poxa, vacilou'}
            </li>
          ))}
        </ul> */}

        <Button type="button" onClick={() => router.push('/')}>
						Jogar novamente
				</Button>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h5>carregando...</h5>
      </Widget.Header>

      <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget  as={motion.section}
      transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
      variants={{
        show: {opacity: 1, y:'0'},
        hidden: {opacity: 0, y:'25%'}
      }}
      initial="hidden"
      animate="show">
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content
      as={motion.section}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show">
        <h3>
          {question.title}
        </h3>
        <p  style= {{ marginBottom: '40px'}}>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1 * 1000);
          }}
        >
          {question.alternatives.map(
            (alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              const alternativeStatus = isCorrect 
                ? 'SUCCESS' 
                : 'ERROR';
                
              const isSelected = selectedAlternative === alternativeIndex;
              return (
                <Widget.Topic
                  as={motion.label}
                  
                  key={alternativeId}
                  htmlFor={alternativeId}
                  data-selected={isSelected}
                  data-status={isQuestionSubmited && alternativeStatus}
                  transition={{
                    delay:0.5,
                    duration:0.4,
                  }}
                  variants={{
                    show: { opacity: 1},
                    hidden: { opacity: 0 },
                  }}
                >
                  <input
                    style={{ display: 'none' }}
                    id={alternativeId}
                    name={questionId}
                    onChange={() => setSelectedAlternative(alternativeIndex)}
                    type="radio"
                    checked={selectedAlternative === alternativeIndex}
                  />
                  {alternative}
                </Widget.Topic>
              );
            })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
            <Button 
              type="submit" 
              disabled={!hasAlternativeSelected}
              as={motion.button}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.05}
              }}
              whileTap={{ scale: 0.95 }}
            >
              Confirmar
            </Button>
       

          {isQuestionSubmited && isCorrect }
          {isQuestionSubmited && !isCorrect }
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <img src={"https://dewey.tailorbrands.com/production/brand_version_mockup_image/298/4605243298_545beea1-9f67-44b1-bd55-710f841a163d.png?cb=1612835865"} width="120px" margin="auto" />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
