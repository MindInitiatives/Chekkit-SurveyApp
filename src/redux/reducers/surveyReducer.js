import { ActionTypes } from "../constants/action-types";


const initialState = {
    questions : [],
    loading : true,
    score : null,
    number : null,
    responses : []
}

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);


export const surveyReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_QUESTIONS:
            return {
                ...state,
                questions : payload.map(item => (
    
                    {
                        question: item.question,
                        options: shuffle([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }
                )),
                loading: false,
                score: 0,
                number : 0
            }

        case ActionTypes.SELECT_ANSWER:
        return {
            ...state, 
            loading: false,
            score: state.questions[state.number].answer === payload ? ++state.score : state.score,
            number : state.number + 1,
            responses : [...state.responses, payload]
        };

        case ActionTypes.START_SURVEY:
            return true;

        case ActionTypes.SURVEY_ERROR:
            return {
                loading: false, 
                error: payload 
            }    
        default:
            return state;
    };
};
