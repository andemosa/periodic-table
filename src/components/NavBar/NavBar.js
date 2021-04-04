import React, { useState } from 'react'
import '../../styles/NavBar.css'
import SearchIcon from '../../ico/search.svg'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'

function NavBar() {
  const[{ periodicTable, periodicSearch }, dispatch] = useDataLayerValue()
  const [menuAboutDev, setMenuAboutDev] = useState()
  const [menuSearchIcon, setMenuSearchIcon] = useState('')
  // const handleMenuSearchText = () => {

  // }

  // SEARCH UI TOGGGLE
	const toggleSearchUI = () => {
		if (periodicSearch === "hidebx") {
			dispatch({
				type: actionTypes.SEARCH_UI_TOGGLE,
				periodicSearch: "" 
			})
		} else {
			dispatch({
				type: actionTypes.SEARCH_UI_TOGGLE,
				periodicSearch: "hidebx" 
			})
		}
	}

  const [menuOpen, setMenuOpen] = useState(false)
  const [menuCloseClass, setMenuCloseClass] = useState('')
  const handleMenuState = () => {
    if (menuOpen === false) {
      setMenuOpen(true)
      setMenuCloseClass('menu-tapped')
    } else {
      setMenuOpen(false)
      setMenuCloseClass('')
    }
    toggleSearchUI()
  }

  return (
    <nav className="navbar">
      <div onClick={handleMenuState} className={`navbar-item navbar-menu ${menuCloseClass}`}>
        <div className="middle"></div>
      </div>
      <div className="navbar-item navbar-name">
        Periodic Table
      </div>
      <div className="navbar-item navbar-search-holder">
        <img className={`navbar-item navbar-search ${menuSearchIcon}`} src={SearchIcon} alt="search icon"/>
      </div>
    </nav>
  )
}

export default NavBar
