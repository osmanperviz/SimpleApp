import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({}, {

})

export const recipesCount = createReducer(0, {
  [types.ADD_RECIPES](state, action){
    return state + 1;
  }
})
