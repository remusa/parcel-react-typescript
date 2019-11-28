import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import useWindowDimensions from '../hooks/useWindowDimensions'

const MAX_WIDTH = 1024

const HeaderStyles = styled.header`
  grid-area: header;
  background-color: transparent;
`

interface Props {}

const Header: React.FC<Props> = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false)
  const { width } = useWindowDimensions()

  const toggleHeader = () => {
    if (width >= MAX_WIDTH) {
      setShowHeader(true)
      return
    }
    setShowHeader(!showHeader)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter') {
      setShowHeader(true)
    }
  }

  return (
    <HeaderStyles>
      <nav
        className='flex items-center justify-between flex-wrap bg-teal-500 p-6 '
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <NavLink className='navbar-item' to='/'>
            <svg
              className='fill-current h-8 w-8 mr-2'
              width='54'
              height='54'
              viewBox='0 0 54 54'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
            </svg>
            <span className='font-semibold text-xl tracking-tight'>Tailwind CSS</span>
          </NavLink>

          <a
            tabIndex={0}
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
            onClick={toggleHeader}
            onKeyPress={handleKeyPress}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div
          id='navbarBasicExample'
          className={width > MAX_WIDTH || showHeader ? 'navbar-menu is-active' : 'navbar-menu'}
        >
          <div className='navbar-start'>
            <div className='navbar-item'>
              <NavLink className='navbar-item' to='/about'>
                About
              </NavLink>

              <NavLink className='navbar-item' to='/contact'>
                Contact
              </NavLink>

              <hr className='navbar-divider' />

              <NavLink className='navbar-item' to='/issues'>
                Report an issue
              </NavLink>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item '>
              <div className='buttons'>
                <NavLink className='button is-light' to='/login'>
                  Log in
                </NavLink>

                <NavLink className='button is-primary' to='/register'>
                  <strong>Sign up</strong>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </HeaderStyles>
  )
}

export default Header
