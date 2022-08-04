import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import "./Navbar.css"

const Navbar = () => {
  const [search, setSearch] = useState ("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault()
    if(!search) return

    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
  <nav id='navbar'>
      <h2>
        <Link to="/"><BiCameraMovie/> Movies Lib</Link>
      </h2>
        <form onSubmit={handlesubmit}>
          <input type="text" placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)} value={search} />
          <button type='submit'> <BiSearchAlt2/> </button>
        </form>
  </nav>
  )
}

export default Navbar