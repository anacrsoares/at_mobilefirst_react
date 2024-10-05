import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { questions } from "./mock";
import { ScrollRestoration } from "react-router-dom";

const AppQuizContainer = styled.div`
  height: 100vh;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  /* overflow: hidden; */
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TitleApp = styled.h1`
  border: 1px solid white;
  font-size: 2.5rem;
`;

const Description = styled.div`
  font-size: 1.2rem;
  /* border: 1px solid white; */
  padding: 10px;
  width: 90vw;
`;

const ChooseTemp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 80vw;
  font-size: 1.2rem;
  margin-top: 30px;
`;

const WelcomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  /* border: 1px solid red; */
`;

const StartGame = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 2rem;
  background-color: var(--highlight-color);
  padding: 1rem;
  margin: 100px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: var(--highlight-hover);
  }
`;

// Start GAme
const QuestionCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 20px;
`;

const QuestionTitle = styled.h2`
  display: flex;
  padding: 15px;
  border: 1px solid orange;
  background-color: orange;
  border-radius: 30px;
  font-size: 1.3rem;
  align-items: center;
  justify-content: center;
`;

const QuestionTimer = styled.div`
  text-align: center;
  font-size: 3rem;
`;

const QuestionOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid orange;
  font-size: 1rem;
  background-color: ${({ selected }) => (selected ? "orange" : "transparent")};
  height: 6rem;

  &:hover {
    background-color: orange;
    cursor: pointer;
  }
`;

export default function AppQuiz() {
  const [time, setTime] = useState(5);
  const [start, setStart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(time);
  const [score, setScore] = useState(0);
  const [questionScore, setQuestionScore] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [selectedAns, setSelectedAns] = useState("");
  const [guesses, setGuesses] = useState([""]);
  const [lastGuess, setLastGuess] = useState("");
  const [reChoose, setReChoose] = useState(false);
  const [background, setBackground] = useState(false);
  const [finished, setFinished] = useState(false);

  // Lógica da passagem das perguntas
  useEffect(() => {
    if (start) {
      if (timer > 0) {
        const interval = setInterval(() => {
          setTimer(timer - 1);
        }, 1000);

        return () => clearInterval(interval);
      } else if (timer === 0) {
        // Quando o tempo acaba, avança para a próxima pergunta
        handleNextQuestion();
      }
    }
  }, [timer, start, currentIndex, time, questions.length]);

  const handleTimer = (event, chosenTime) => {
    setTime(chosenTime); // Mensagem que aparece na tela de início
    setTimer(chosenTime); // Timer que avança as perguntas
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleAns = (ans) => {
    setSelectedAns(ans);
    setBackground(true);
    setGuesses([...guesses, ans[0]]);
  };

  // Escolhe o último palpite da lista
  useEffect(() => {
    const getLastGuess = guesses.at(-1);
    setLastGuess(getLastGuess);
  }, [guesses]);

  // Mostra a alternativa escolhida no console
  useEffect(() => {
    console.log(lastGuess);
  }, [lastGuess]);

  // Lógica da pontuação
  useEffect(() => {
    // Verifica se há um palpite e evita duplicação
    if (lastGuess && !reChoose) {
      // Caso o último palpite seja o correto
      if (lastGuess === questions[currentIndex].correctAnswer) {
        setQuestionScore(1); // Define a pontuação da questão como 1 (correta)
        console.log("Resposta correta! Pontuação da questão: 1");
      } else {
        setQuestionScore(0); // Define a pontuação da questão como 0 (errada)
        console.log(
          "Resposta incorreta ou já avaliada. Pontuação da questão: 0"
        );
      }
    }
  }, [lastGuess, currentIndex]);

  // Avança para a próxima questão e acumula a pontuação

  const handleNextQuestion = () => {
    console.log("Avançando para a próxima pergunta...");

    if (currentIndex < questions.length - 1) {
      if (!reChoose) {
        // Só acumula pontuação se ainda não tiver sido processada
        setGameScore((prevTotal) => {
          const newTotal = prevTotal + questionScore;
          console.log("Pontuação acumulada até agora:", newTotal); // Este log será chamado uma única vez
          return newTotal;
        });
      }

      setCurrentIndex(currentIndex + 1); // Avança para a próxima questão
      setQuestionScore(0); // Reseta o score da questão
      setReChoose(false); // Reseta para permitir avaliação da próxima questão
      setGuesses([]); // Limpa os palpites
      setTimer(time); // Reseta o timer para a próxima questão
    } else {
      // Finaliza o quiz e acumula o último score
      setGameScore((prevTotal) => {
        const finalScore = prevTotal + questionScore;

        return finalScore;
      });
      setFinished(true); // Marca o quiz como finalizado
      console.log("Pontuação final do jogo:", gameScore + questionScore);
    }
  };

  return (
    <AppQuizContainer>
      <ContainerWrapper>
        <TitleApp>Mobile-First Quiz</TitleApp>

        {!start && !finished ? (
          <WelcomeScreen>
            <Description>
              Bem-vindo ao Quiz! Vamos testar os seus conhecimentos sobre
              responsividade, usabilidade e Mobile-First. Está preparado?
            </Description>
            <Description>
              Escolha o tempo por pergunta: {time} segundos
            </Description>
            <ChooseTemp>
              0s
              <Slider
                value={time}
                onChange={handleTimer}
                step={5}
                min={0}
                max={60}
                valueLabelDisplay="auto"
              />
              60s
            </ChooseTemp>
            <StartGame onClick={handleStart}>Começar</StartGame>
          </WelcomeScreen>
        ) : !finished ? (
          <QuestionCard>
            <QuestionTitle>
              {`${currentIndex + 1}. `}
              {questions[currentIndex].question}
            </QuestionTitle>
            <QuestionTimer>{timer}</QuestionTimer>

            {questions[currentIndex].options.map((ans, index) => (
              <QuestionOptions
                selected={selectedAns === ans}
                onClick={() => handleAns(ans)}
                key={index}
              >
                {ans}
              </QuestionOptions>
            ))}
          </QuestionCard>
        ) : (
          // Exibe a pontuação final quando o quiz termina
          <div style={{ textAlign: "center" }}>
            <h2>Quiz Finalizado!</h2>
            <p>
              Sua pontuação final é: {gameScore} de {questions.length}
            </p>
          </div>
        )}
      </ContainerWrapper>
    </AppQuizContainer>
  );
}
