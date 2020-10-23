/* eslint-disable linebreak-style */
// import { modifyIntro } from '../actions'
const initialState = {
  image: '',
  description: '',
}

const introductionReducer = (state = initialState, action) => {
  const { type, description, image } = action
  switch (type) {
    case 'MODIFY_INTRO':
      return {
        description, image,
      }
    default:
      return state
  }
}

export default introductionReducer
