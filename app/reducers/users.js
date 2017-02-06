import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const users = createReducer({}, {
  [types.FETCH_USERS_SUCCESS](state, action){
    let new_state = {};
    action.users.forEach( (user) => {
      new_state[user.id] = user
    });
    return new_state;
    console.info(new_state);
  }

})

export const usersCount = createReducer(0, {
  [types.FETCH_USERS_SUCCESS](state, action){
    return action.users.length;
  }
})
