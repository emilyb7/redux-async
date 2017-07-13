const defaultState = {
  isFetching: false,
  cats: [],
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_CAT':
      return { ...state, isFetching: true, }
    default:
      return state
  }
}
