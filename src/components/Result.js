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
    background-color: #ff0000;
    font-size: 1em;
    outline: none;
    margin-top: 1em
`

const btnCSS = {
    marginBottom: "4em"
}

const Result = ({pts, ttl}) => {


    const refreshPage = () => window.location.reload();
    const selections = useSelector(state => state.allQuestions.responses);
    const questions  = useSelector(state => state.allQuestions.questions);
    const theQuestions = [];
    questions.forEach(data => {
        theQuestions.push(data.question)
    });
    const theAnswers = [];
    questions.forEach(data => {
        theAnswers.push(data.answer)
    });
    const correctAnswers = [];
    selections.forEach(data => {
        correctAnswers.push(data === [...questions, questions.answer])
    })
    const responses = theQuestions.map((e, i) => e + `<br/><br/> You Selected : ` + selections[i]);
    const correctResponses = theQuestions.map((e, i) => e + `<br/><br/> You Selected : ` + theAnswers[i]);
    return (
        <>
            <Title>Your Responses</Title>
            <Points>You answered {pts} correctly out of {ttl} Questions!</Points>
            <Answers>
            {
                        responses
                        .map((item, index) => {
                            if (index !== 0 && item === correctResponses[index]){
                            return <Answer key={index} dangerouslySetInnerHTML={{ __html: item }}></Answer>;
                        }
                        return <WrongAnswer key={index} dangerouslySetInnerHTML={{ __html: item }}></WrongAnswer>
                    })}
            </Answers>
            <Button onClick={refreshPage} style={btnCSS}>Retry</Button>
        </>
    )
}

export default Result
