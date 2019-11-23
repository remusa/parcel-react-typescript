import styled from '@emotion/styled'
import React, { useState } from 'react'
import Header from 'react-bulma-components/lib/components/header'
import { Link } from 'react-router-dom'
import useWindowDimensions from './../hooks/useWindowDimensions'

const HeaderStyles = styled.header`
    grid-area: header;

    width: 100vw;
    font-size: 1.6rem;
    padding: 8px;
`

interface Props {}

const Header: React.FC<Props> = () => {
    const [showHeader, setShowHeader] = useState<boolean>(false)
    const MAX_WIDTH: number = 1024
    const { width } = useWindowDimensions()

    const toggleHeader = () => {
        if (width >= MAX_WIDTH) {
            setShowHeader(true)
            return
        }
        setShowHeader(!showHeader)
    }

    return (
        <HeaderStyles>
            <nav className='navbar' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <Link className='navbar-item' href='https://bulma.io' to='/'>
                        <img
                            src='https://bulma.io/images/bulma-logo.png'
                            alt='logo'
                            width='112'
                            height='28'
                        />
                    </Link>
                    <a
                        role='button'
                        className='navbar-burger burger'
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarBasicExample'
                        onClick={toggleHeader}
                    >
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>

                <div
                    id='navbarBasicExample'
                    className={
                        width > MAX_WIDTH || showHeader ? 'navbar-menu is-active' : 'navbar-menu'
                    }
                >
                    <div className='navbar-start'>
                        <div className='navbar-item has-dropdown is-hoverable'>
                            <a className='navbar-link'>More</a>

                            <div className='navbar-dropdown'>
                                <Link className='navbar-item' to='/about'>
                                    About
                                </Link>
                                <Link className='navbar-item' to='/contact'>
                                    Contact
                                </Link>
                                <hr className='navbar-divider' />
                                <Link className='navbar-item' to='/issues'>
                                    Report an issue
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <div className='buttons'>
                                <Link className='button is-light' to='/login'>
                                    Log in
                                </Link>

                                <Link className='button is-primary' to='/register'>
                                    <strong>Sign up</strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </HeaderStyles>
    )
}

export default Header
