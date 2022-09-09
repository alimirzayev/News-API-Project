import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Sky-news-logo.png" alt="" />
        </Link>
      </div>

      <div className="header-search">
        <label>
          <input type="text" placeholder='Search News Name' name="" id="" />
        </label>

        <button>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" alt="" />
        </button>
      </div>
    </header>
  )
}

export default Header