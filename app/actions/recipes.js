import * as types from './types'

export function addRecipes() {
  return {
    type: types.ADD_RECIPES,
  }
}

export function fetchRecipes(recipes) {
  return{
    type: types.FETCH_RECIPES,
    payload: recipes
  }
}
