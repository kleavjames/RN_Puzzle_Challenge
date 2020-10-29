import { all, fork } from 'redux-saga/effects';

import initPuzzle from './tileSaga';

export default function* rootSaga() {
  yield all([fork(initPuzzle)]);
}
