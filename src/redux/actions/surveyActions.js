import axios from 'axios';
import { ActionTypes } from "../constants/action-types"


export const getQuestions = () => dispatch => {
    axios
    .get('https://opentdb.com/api.php?amount=10&category=28&type=multiple')
    .then(res => 
        dispatch({
            type: ActionTypes.GET_QUESTIONS,
            payload: res.data.results
        })
        )
};

export const startSurvey = () => {
    return {
        type : ActionTypes.START_SURVEY
    };
};

export const selectAnswer = (quiz) => {
    return {
        type : ActionTypes.SELECT_ANSWER,
        payload :  quiz
    };
};
