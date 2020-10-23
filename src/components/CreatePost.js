/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import s from 'styled-components'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

const Button = s.button`
  background-color: cyan;
  color: black;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`

const CreatePost = ({ addPost1 }) => {
  // for if we are editing
  const [editing, setEditing] = useState(false)
  const [titleInput, setTitle] = useState('')
  const [imageInput, setImage] = useState('')
  const [descriptionInput, setDescription] = useState('')

  const editClick = () => {
    setEditing(!editing)
  }
  const cancelClick = () => {
    setEditing(false)
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      {!editing && (
        <Button
          type="button"
          onClick={editClick}
        >
          Create Post
        </Button>
      )}
      {editing && (
        <form
          onSubmit={e => {
            e.preventDefault()
            addPost1(titleInput, imageInput, descriptionInput)
            setEditing(false)
          }}
        >
          <label htmlFor="title">
            Title:
            <input
              value={titleInput}
              onChange={e => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor="url">
            Image URL:
            <input
              value={imageInput}
              onChange={e => setImage(e.target.value)}
            />
          </label>

          <label htmlFor="des">
            Description
            <input
              value={descriptionInput}
              onChange={e => setDescription(e.target.value)}
            />
          </label>

          <Button type="submit">Add Post</Button>
          <Button
            type="button"
            onClick={cancelClick}
          >
            Cancel
          </Button>
        </form>
      )}
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  addPost1: (title, image, description) => dispatch(addPost(title, image, description)),
})

export default connect(null, mapDispatchToProps)(CreatePost)
