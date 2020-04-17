import React from "react"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h2>scramblepad.space</h2>
        <p>
          The idea is simple. Get whats in your mind on the page. Scramble Pad
          saves your notes automatically as you write{" "}
          <span role="img" aria-label="pencil emoji">
            ✏️
          </span>
        </p>
        <p>
          made by{" "}
          <a
            className="social-link"
            href="https://twitter.com/DavidGeorgeBell"
            target="_blank"
            rel="noopener noreferrer"
          >
            David Bell
          </a>{" "}
          © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}
export default Sidebar
