import styled from '@emotion/styled'
import React from 'react'

const RegisterStyles = styled.section`
    height: 100%;
`

interface Props {}

const Register: React.FC<Props> = () => (
    <RegisterStyles className='section'>
        <div className='columns'>
            <div className='column is-4 is-offset-4'>
                <div className='field'>
                    <label className='label' htmlFor='username'>
                        Username
                        <div className='control has-icons-left has-icons-right'>
                            <input
                                required
                                className='input is-success'
                                name='username'
                                type='text'
                                placeholder='Text input'
                            />

                            <span className='icon is-small is-left'>
                                <i className='fa fa-user'></i>
                            </span>

                            <span className='icon is-small is-right'>
                                <i className='fa fa-check'></i>
                            </span>
                        </div>
                        <p className='help is-success'>This username is available</p>
                    </label>
                </div>

                <div className='field'>
                    <label className='label' htmlFor='email'>
                        Email
                        <div className='control has-icons-left has-icons-right'>
                            <input
                                required
                                name='email'
                                className='input is-danger'
                                type='email'
                                placeholder='Email input'
                            />

                            <span className='icon is-small is-left'>
                                <i className='fa fa-envelope'></i>
                            </span>

                            <span className='icon is-small is-right'>
                                <i className='fa fa-warning'></i>
                            </span>
                        </div>

                        <p className='help is-danger'>This email is invalid</p>
                    </label>
                </div>

                <div className='field'>
                    <label className='label' htmlFor='password'>
                        <p className='control has-icons-left'>
                            <input
                                required
                                name='password'
                                className='input'
                                type='password'
                                placeholder='Password'
                            />

                            <span class='icon is-small is-left'>
                                <i class='fas fa-lock'></i>
                            </span>
                        </p>
                    </label>
                </div>

                <div className='field'>
                    <div className='control has-text-centered'>
                        <button type='button' className='button is-link'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </RegisterStyles>
)

export default Register
