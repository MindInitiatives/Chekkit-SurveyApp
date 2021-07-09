import { combineReducers } from "redux";
import { surveyReducer } from "./surveyReducer";

const reducers = combineReducers({
    allQuestions : surveyReducer,
});

export default reducers;