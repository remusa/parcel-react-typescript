import * as yup from 'yup'

export const usernameValidation = yup
  .string()
  .min(3, 'Username must be at least 3 characters long')
  .max(25, 'Username must be max. 25 characters')
  .matches(/^[a-zA-Z]/, 'Username must start with a letter')
  .lowercase()
  .trim()
  // .
  .required('Username is required')

export const emailValidation = yup
  .string()
  .email('Invalid email')
  .lowercase()
  .trim()
  .required('Email is required')

export const passwordValidation = yup
  .string()
  .min(10, 'Password must be at least 10 characters long')
  .max(25, 'Password must be max. 25 characters')
  .trim()
  .required('Password is required')
// .matches(
//     /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{10,}$/,
//     'Must Contain 10 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
// )

export const confirmPasswordValidation = yup
  .string()
  .trim()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .required('Confirm Password is required')
