const defaultState = {
  isFetching: false,
  cats: [],
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_CAT':
      return { ...state, isFetching: true, }
    case 'NEW_CAT':
      return { ...state, cats: state.cats.concat([ action.cat, ]), isFetching: false, }
    default:
      return state
  }
}
