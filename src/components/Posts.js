/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import s from 'styled-components'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deletePost, changePost, addPost } from '../actions'

const Button = s.button`
  background-color: lime;
  color: black;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`

// first just have a small component for a single post
// https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg
const Post = ({
  title, image, description, id, deletePost1, changePost1,
}) => {
  const [editing, setEditing] = useState(false)
  const [titleInput, setTitle] = useState('')
  const [imageInput, setImage] = useState('')
  const [descriptionInput, setDescription] = useState('')
  const cancelClick = () => {
    setEditing(false)
  }
  return (
    <div>
      <h1>
        {title}
        ,ID:
        {id}
      </h1>
      <img height="150" width="150" effect="sepia" src={image} alt="new" />
      <h2>{description}</h2>

      {!editing && (
        <Button
          type="button"
          onClick={() => {
            setEditing(!editing)
          }}
        >
          Edit
        </Button>
      )}
      {editing && (
        <form
          onSubmit={e => {
            e.preventDefault()
            changePost1(titleInput, imageInput, descriptionInput, id)
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

          <Button type="submit">Submit</Button>
          <Button
            type="button"
            onClick={() => {
              deletePost1(id)
            }}
          >
            Delete Post
          </Button>
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

// the list of posts that I want to display
const Posts = ({ postList, changePost1, deletePost1 }) => (
  <ul>
    {postList.map(post => (
      <Post
        key={post.id}
        changePost1={changePost1}
        deletePost1={deletePost1}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...post}
      />
    ))}
  </ul>
)

const mapDispatchToProps = dispatch => ({
  addPost: (title, image, description) => dispatch(addPost(title, image, description)),
  deletePost1: id => dispatch(deletePost(id)),
  changePost1:
  (title, image, description, id) => dispatch(changePost(title, image, description, id)),
})

const mapStateToProps = state => ({
  postList: state.postReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
