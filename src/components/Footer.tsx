import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../context/ThemeContext'
import Toggle from './Toggle/Toggle'

const FooterStyles = styled.div`
    grid-area: footer;
`

interface Props {}

const Footer: React.FC<Props> = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (
        <FooterStyles>
            <footer className='footer'>
                <div className='content has-text-centered'>
                    <p>
                        <strong>Bulma</strong> by <a href='https://jgthms.com'>Jeremy Thomas</a>.
                        The source code is licensed
                        <span>
                            {' '}
                            <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>
                        </span>
                        . The website content is licensed{' '}
                        <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
                            CC BY NC SA 4.0
                        </a>
                        .
                    </p>

                    <Toggle isOn={darkMode} handleToggle={setDarkMode} />
                </div>
            </footer>
        </FooterStyles>
    )
}

export default Footer
