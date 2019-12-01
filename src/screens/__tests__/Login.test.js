import React from 'react'
import { cleanup, render, fireEvent, wait } from 'test-utils'
import '@testing-library/jest-dom/extend-expect'
import Login from '../Login'

beforeEach(() => {
  window.localStorage.removeItem('token')
})
afterEach(cleanup)

const mockLoginUser = {
  email: 'test@test.com',
  password: '1234567890',
}

it('should submit correct values and login an user', () => {
  const { container, getByLabelText, getByText } = render(<Login />)

  // Fill email field
  const email = getByLabelText(/email/i)
  wait(() => fireEvent.change(email, { target: { value: mockLoginUser.email } }))
  wait(() => expect(email).toHaveTextContent(mockLoginUser.email))

  // Fill password field
  const password = getByLabelText(/password/i)
  wait(() => fireEvent.change(password, { target: { value: mockLoginUser.password } }))
  wait(() => expect(password).toHaveTextContent(mockLoginUser.password))

  // Submit form
  const submitBtn = getByText('Login', { exact: true }) // getByRole('Login')
  wait(() => fireEvent.click(submitBtn))

  // wait(() => {
  //   const token = JSON.stringify(localStorage.getItem('token'))
  //   console.log('token', token)
  //   expect(token).toBe('test-token')
  // })
})

it.skip('should reset values', () => {
  const { getByLabelText, getByText } = render(<Login />)

  // Fill email field
  const email = getByLabelText(/email/i)
  wait(() => fireEvent.change(email, { target: { value: mockLoginUser.email } }))
  wait(() => expect(email).toHaveTextContent(mockLoginUser.email))

  // Fill password field
  const password = getByLabelText(/password/i)
  wait(() => fireEvent.change(password, { target: { value: mockLoginUser.password } }))
  wait(() => expect(password).toHaveTextContent(mockLoginUser.password))

  // Reset values
  const resetBtn = getByText(/reset/)
  wait(() => fireEvent.click(resetBtn))
  wait(() => expect(email).toHaveTextContent(''))
  wait(() => expect(password).toHaveTextContent(''))
})
