import styled from '@emotion/styled'
import React from 'react'

const LoginStyles = styled.section`
    /* height: 100%; */
    text-align: center;
`

interface Props {}

const Login: React.FC<Props> = () => (
    <LoginStyles className='section'>
        <div className='columns'>
            <div className='column is-4 is-offset-4'>
                <div className='field'>
                    <label className='label' htmlFor='email'>
                        <p className='control has-icons-left has-icons-right'>
                            <input
                                required
                                name='email'
                                className='input'
                                type='email'
                                placeholder='Email'
                            />

                            <span class='icon is-small is-left'>
                                <i class='fas fa-envelope'></i>
                            </span>

                            <span className='icon is-small is-right'>
                                <i className='fa fa-check'></i>
                            </span>
                        </p>
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
                    <p className='control has-text-centered'>
                        <button type='button' className='button is-success'>
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </LoginStyles>
)

export default Login
