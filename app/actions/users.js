import * as types from './types'

// export function fetchUsersSuccess(users) {
//   return {
//     type: types.FETCH_USER_SUCCESS,
//     users
//   }
// }

export function fetchUsers() {
  return{
    type: types.FETCH_USERS,
  }
}
