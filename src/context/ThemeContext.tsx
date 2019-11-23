import React, { createContext, useState } from 'react'
import { createGlobalStyle, ThemeProvider as StyledProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'

const GlobalStyle = createGlobalStyle`
    /* @import '~react-bulma-components/src/index.sass'; */

    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.colorBackground};
        color: ${props => props.theme.colorFont};
        font-family: 'Lato-Regular', 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        /* font-size: 1.5rem; */
        line-height: 2;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* transition: color 0.2s ease-out, background 0.2s ease-out; */
        transition: all 0.25s linear;
    }

    h1 {
        font-weight: bold;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme.colorHeader};
        cursor: default;
    }

    button {
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    p {
        text-align: center;
    }
`

interface IContext {
    darkMode: boolean
    setDarkMode: () => void
}

const ThemeContext = createContext({} as IContext)

interface IProps {
    children: HTMLElement
}

const ThemeProvider: React.FC<IProps> = ({ children }) => {
    const [darkMode, setIsDarkMode] = useState<boolean>(
        JSON.parse(localStorage.getItem('darkMode')) || false
    )

    const useDarkMode = () => {
        setIsDarkMode(!darkMode)
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }

    const computedTheme = darkMode ? lightTheme : darkTheme

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode: useDarkMode }}>
            <StyledProvider theme={computedTheme}>
                <>
                    <GlobalStyle />
                    {children}
                </>
            </StyledProvider>
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider, GlobalStyle }
