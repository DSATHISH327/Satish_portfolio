import React from 'react'
import './Header.css'
const Header = () => {
    const List_items=["Home", "Projects", "Contact us", "Resume"]
  return (
    <>
      <nav className='Navbar' id='Home'>
        <h1 className='Headline'>Desaboina Satish</h1>
        <ul className='navbar-unorder-list'>
            <li><a href='#Home' >{List_items[0]}</a></li>
            <li><a href="#Projects">{List_items[1]}</a></li>
            <li><a href="#Contactme">{List_items[2]}</a></li>
            <li><a href="https://drive.google.com/file/d/1Lk0gebn731n23ktGFCGRkOqyigcCI4BI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">{List_items[3]}</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
