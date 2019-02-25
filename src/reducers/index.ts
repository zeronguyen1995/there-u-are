import { combineReducers } from 'redux'
import * as fromLoginReducer from './login' 

/**
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface State {
    login: fromLoginReducer.IState
}

/**
 * initialState 
 * InitialState is the same as in our reducer.
 * For each reducer, we add a “default state” in our initialState.
 */
export const initialState: State = {
    login: fromLoginReducer.initialState
}

/**
 * Root reducer
 * The root reducer of the app is the reducer combined by all other reducers of the app.
 */
export const reducer = combineReducers<State>({
    login: fromLoginReducer.reducer
})

export type AppState = ReturnType<typeof reducer>