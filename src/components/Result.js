import styled, { css } from 'styled-components'
import {Button} from './Button'
import { useSelector } from "react-redux";

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const Answers = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Answer = styled.p`
    display: block;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #161A31;
    background-color: #37f3aa;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    
`;

const WrongAnswer = styled.p`
    display: block;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    background-color: red;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    
`;

const btnCSS = css`
    margin-bottom: 4em;
`;


const Result = ({pts, ttl}) => {


    const refreshPage = () => window.location.reload();
    const responses = useSelector(state => state.allQuestions.responses);
    const questions  = useSelector(state => state.allQuestions.questions);
    const correctAnswers = [];
    questions.forEach(data => {
        correctAnswers.push(data.answer)
    });
    console.log(correctAnswers)
    return (
        <>
            <Title>Your Responses</Title>
            <Points>You answered {pts} correctly out of {ttl} Questions!</Points>
            <Answers>
            {
                        responses
                        .map((item, index) => (
                            <Answer key={index} dangerouslySetInnerHTML={{ __html: item }}></Answer>
                        ))}
            </Answers>
            <Button onClick={refreshPage} css={btnCSS}>Retry</Button>
        </>
    )
}

export default Result
