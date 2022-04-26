import { combineReducers } from 'redux';

import InitReducer from './init-reducer';
import UserReducer from './user-reducer';
//import BooksReducer from './books-reducer';
//import TestReducer from './test-reducer';
//import ResultReducer from './result-reducer';
//import ErrorReducer from './error-reducer';
//import StudyingScheduleReducer from './studyingSchedule_reducer';
//import StartTestTokenReducer from './startTest_reducer';

const Reducers = combineReducers({
  init: InitReducer,
  user: UserReducer,
  //books: BooksReducer,
  //test: TestReducer,
  //result: ResultReducer,
  //error: ErrorReducer,
    //studyingSchedule: StudyingScheduleReducer,
    //startTestToken: StartTestTokenReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT')
    state = Object.assign({}, { init: state.init });
  return Reducers(state, action)
};

export default rootReducer;
