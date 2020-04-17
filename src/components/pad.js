import React, { useState, useEffect } from "react"

const Pad = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const localNotes = localStorage.getItem("scramble-content")
    setNotes(localNotes)
  }, [])

  const handleChange = e => {
    setNotes(e.target.value)
    localStorage.setItem("scramble-content", e.target.value)
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
          value={notes}
          onChange={handleChange}
        ></textarea>
      </label>
    </form>
  )
}
export default Pad
