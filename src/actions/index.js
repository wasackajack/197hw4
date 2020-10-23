/* eslint-disable linebreak-style */
// export the modifyintroduciton
export const modifyIntro = (image, description) => ({
  type: 'MODIFY_INTRO',
  image,
  description,
})

let currId = 0
// eslint-disable-next-line no-return-assign
export const addPost = (title, image, description) => ({
  type: 'ADD_POST',
  title,
  image,
  description,
  id: currId += 1,
})

export const deletePost = id => ({
  type: 'DELETE_POST',
  id,
})

export const changePost = (title, image, description, id) => ({
  type: 'CHANGE_POST',
  title,
  image,
  description,
  id,
})
