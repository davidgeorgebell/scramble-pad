import React, { useState } from "react"

const ScramblePad = () => {
  const [notes, setNotes] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log("submit")
  }
  return (
    <form className="scramble__form" onSubmit={handleSubmit}>
      <label className="scramble__label" for="scramblePad">
        <span className="hidden">Add your notes</span>
        <textarea
          className="scramble__input"
          rows="10"
          placeholder="Add notes here 📝"
          name="ScramblePad"
        />
      </label>
    </form>
  )
}
export default ScramblePad
