import React from 'react'
import { render, cleanup, fireEvent, getByRole, waitForElement } from '@testing-library/react'
// import { render, cleanup, fireEvent, getByRole, waitForElement } from 'test-utils'
import Header from '../../components/Header'

afterEach(cleanup)

it('should render the Header', () => {
    const { container, getByText } = render(<Header />)

    console.log(container)

    const toggleButton = getByRole('button')
    console.log('toggleButton', toggleButton)

    fireEvent(toggleButton)
    console.log(container)
})
