import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Sidebar from "./sidebar"
import Pad from "./pad"

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-wrapper">
        <main>
          <Pad />
        </main>
        <aside>
          <Sidebar />
        </aside>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
