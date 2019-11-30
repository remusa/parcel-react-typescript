import React from 'react'
import useForm from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'
import { emailValidation, passwordValidation } from '../utils/validationSchemas'

const validationSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
})

const LoginStyles = styled.section`
  text-align: center;

  .errorMessage {
    color: red;
  }
`

export interface IUser {
  email: string
  password: string
}

interface Props {}

const Login: React.FC<Props> = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    reset,
    getValues,
    formState: { isSubmitting, dirty, isValid },
  } = useForm<IUser>({
    validationSchema,
  })

  const onSubmit = async ({ email, password }: IUser) => {
    console.log('SUBMITING: ', email, password)
    // await signin()
  }

  return (
    <LoginStyles className='section'>
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={isSubmitting} aria-busy={isSubmitting}>
              <h1 data-testid='login-page'>Login</h1>

              {/* <Error error={error} /> */}

              <div className='field'>
                <label className='label' htmlFor='email'>
                  <p className='control has-icons-left has-icons-right'>
                    <input
                      type='email'
                      name='email'
                      className='input'
                      placeholder='Email'
                      ref={register({ required: true })}
                      // as={TextField}
                    />

                    <span className='icon is-small is-left'>
                      <i className='fas fa-envelope'></i>
                    </span>

                    <span className='icon is-small is-right'>
                      <i className='fa fa-check'></i>
                    </span>
                  </p>

                  {/* <ErrorMessage name='email' component='div' className='errorMessage' /> */}
                </label>
              </div>

              <div className='field'>
                <label className='label' htmlFor='password'>
                  <p className='control has-icons-left'>
                    <input
                      type='password'
                      name='password'
                      className='input'
                      placeholder='*****'
                      ref={register({ required: true })}
                      // as={TextField}
                    />

                    <span className='icon is-small is-left'>
                      <i className='fas fa-lock'></i>
                    </span>
                  </p>

                  {/* <ErrorMessage name='password' component='div' className='errorMessage' /> */}
                </label>
              </div>

              <div className='field'>
                <p className='control has-text-centered'>
                  <button
                    type='submit'
                    className='button is-success'
                    disabled={!isValid || isSubmitting}
                  >
                    Login
                  </button>

                  <button
                    type='reset'
                    className='button is-danger'
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </button>
                </p>
              </div>
            </fieldset>

            <pre>{JSON.stringify(getValues(), null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </form>
        </div>
      </div>
    </LoginStyles>
  )
}

export default Login
