import { takeEvery } from "redux-saga"
import { fork, put, call, select } from "redux-saga/effects"

import * as Types from '../actions/types'

function* performFetchRecipes(request) {
  console.info(request)
}

function* watchRecipesSearch() {
  yield* takeEvery(Types.FETCH_RECIPES, performFetchRecipes)
}

export default [
  fork(watchRecipesSearch),
]
