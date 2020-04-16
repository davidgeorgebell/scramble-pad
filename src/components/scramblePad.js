import React, { useState, useEffect } from "react"

const ScramblePad = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = localStorage.getItem("scramble-content")
    if (notes) {
      setNotes(JSON.parse(notes))
    }
  })

  const handleChange = e => {
    setNotes(e.target.value)
    localStorage.setItem("scramble-content", JSON.stringify(e.target.value))
  }

  return (
    <form className="scramble__form">
      <label className="scramble__label" htmlFor="scramblePad">
        <span className="hidden">Add your notes</span>
        <textarea
          className="scramble__input"
          rows="10"
          placeholder="Add notes here 📝"
          name="ScramblePad"
          onChange={handleChange}
        ></textarea>
      </label>
    </form>
  )
}
export default ScramblePad
