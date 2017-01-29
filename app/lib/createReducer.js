export default createReducer(initialState, handlers) {
  return function reducer(initialState, action){
    if(handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
