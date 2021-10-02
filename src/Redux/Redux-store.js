import { applyMiddleware, combineReducers, createStore } from "redux";
import { appReducer } from "./App-reducer";
import thunkMiddleWare from 'redux-thunk';

const reducers = combineReducers({
    app: appReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare))