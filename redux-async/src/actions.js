export const newCat = cat => ({
  type: 'NEW_CAT',
  cat,
})

export const getCat = () => ({
  type: 'GET_CAT',
})
