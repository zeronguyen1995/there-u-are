import { createStore, Store } from 'redux'
import { State, reducer } from '../reducers/index'

const store : Store<State> = createStore(reducer)

export default store