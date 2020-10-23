/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import { modifyIntro } from '../actions'

const Button = s.button`
  background-color: cyan;
  color: black;
  font-size: 20px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`

const Introduction = ({ image, description, modifyIntro1 }) => {
  // things that I can change
  const [editing, setEditing] = useState(false)
  const [imageInput, setImage] = useState('')
  const [descriptionInput, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // if submit is clicked
  const submitClick = () => {
    setEditing(false)
    setSubmitted(true)
    modifyIntro1(imageInput, descriptionInput)
  }

  const editClick = () => {
    setEditing(!editing)
    setSubmitted(false)
  }
  const cancelClick = () => {
    setEditing(!editing)
    setSubmitted(true)
    modifyIntro1(image, description)
  }

  return (
    <div>
      <h1>Hey this is me!!</h1>
      {!editing && (
        <Button
          type="button"
          onClick={editClick}
        >
          Edit
        </Button>
      )}
      {editing && (
        <form onSubmit={submitClick}>
          <label htmlFor="image">
            Image url:
            <input
              value={imageInput}
              onChange={e => setImage(e.target.value)}
            />
          </label>
          <label htmlFor="image">
            Description:
            <input
              value={descriptionInput}
              onChange={e => setDescription(e.target.value)}
            />
          </label>
          <Button type="submit">Submit</Button>
          <Button onClick={cancelClick} type="button">
            Cancel
          </Button>
        </form>
      )}
      {submitted && <h1>{description}</h1>}
      {submitted && (
        // https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg (just for fun lol)
        <img src={image} alt="new" />
      )}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  modifyIntro1: (image, description) => dispatch(modifyIntro(image, description)),
})

const mapStateToProps = state => ({
  image: state.introductionReducer.image,
  description: state.introductionReducer.description,
})
export default connect(mapStateToProps, mapDispatchToProps)(Introduction)
