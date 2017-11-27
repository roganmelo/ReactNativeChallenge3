import { call, put, takeLatest } from 'redux-saga/effects';

import { api } from 'services';
import { Types, User } from './ducks';

function* searchAndAddUser(action) {
  const response = yield call(api.getUser, action.payload);
  yield put(User.add(response));
}

export default [takeLatest(Types.SEARCH_USER, searchAndAddUser)];
