import { takeEvery } from "redux-saga"
import { fork, put, call, select } from "redux-saga/effects"
import Api from '../lib/api'
import { FETCH_USERS_SUCCESS } from '../actions/types'

import * as Types from '../actions/types'

function* performFetchUsers(request) {
  try {
    users = yield call(Api.get, '/users')
    yield put({type: FETCH_USERS_SUCCESS, users})
  } catch (err) {
    console.log(err)
  }

}

function* watchUsersSearch() {
  yield* takeEvery(Types.FETCH_USERS, performFetchUsers)
}

export default [
  fork(watchUsersSearch),
]
