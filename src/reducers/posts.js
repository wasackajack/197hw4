/* eslint-disable linebreak-style */
const postReducer = (state = [], action) => {
  const {
    type, title, description, image, id,
  } = action
  switch (type) {
    case 'ADD_POST':
      // add to the state
      return [
        ...state,
        {
          title, description, image, id,
        },
      ]
    case 'DELETE_POST':
      return state.filter(post => post.id !== id)
    case 'CHANGE_POST':
      return state.map(post => ((post.id === id) ? {
        title, description, image, id,
      } : post))
    default:
      return state
  }
}

export default postReducer
