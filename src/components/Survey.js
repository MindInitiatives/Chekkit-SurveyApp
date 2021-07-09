import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from "react-redux";
import { getQuestions, selectAnswer } from "../redux/actions/surveyActions";
import Result from './Result';
import PropTypes from 'prop-types'

const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #37f3aa;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #37f3aa;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #37f3aa;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;


class Survey extends Component {

    componentDidMount() {
        this.props.getQuestions();
    }

    pickAnswer = (e) => {

    let userAnswer = e.target.outerText;
    this.props.selectAnswer(userAnswer)
    }

    render () {

        const {questions, number, score} = this.props.allQuestions;

        return (
        <QuizWindow>
            { 
            questions[number] &&

                <>
                    <Question dangerouslySetInnerHTML={{ __html: questions[number].question }}></Question>
                
                    <Options>
                        
                        {
                        questions[number]
                        .options
                        .map((item, index) => (
                            <Option key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={this.pickAnswer}></Option>
                        ))}
                        
                    </Options>
                </>

            }
            {
                number === 10 && <Result pts={score} ttl={number} />
            }
        </QuizWindow>
    )
        }
    

};

Survey.propTypes = {
    getQuestions : PropTypes.func.isRequired,
    allQuestions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    allQuestions: state.allQuestions
})

export default connect(mapStateToProps, 
    {getQuestions, selectAnswer})
    (Survey);
