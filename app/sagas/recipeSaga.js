import { takeEvery } from "redux-saga"
import { fork, put, call, select } from "redux-saga/effects"
import Api from '../lib/api'

import * as Types from '../actions/types'

function* performFetchRecipes(request) {
  try {
    response = yield call(Api.get, '/posts/1')
    console.info(response)
  } catch (err) {
    console.log(err)
  }

}

function* watchRecipesSearch() {
  yield* takeEvery(Types.FETCH_RECIPES, performFetchRecipes)
}

export default [
  fork(watchRecipesSearch),
]
