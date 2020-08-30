import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('The first name is required')
    .min(2, 'Too short')
    .max(25, 'Too long'),
  lastName: Yup.string()
    .required('The first name is required')
    .min(2, 'Too short')
    .max(25, 'Too long'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The passoword is required.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match')
    .required('You need to confirm your password.'),
});

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Sign up for an account
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to register into your account
          </Heading>
          <StyledForm>
            <Field
              type="firstName"
              name="firstName"
              placeholder="Your first name..."
              component={Input}
            />
            <Field
              type="lastName"
              name="lastName"
              placeholder="Your last name..."
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Field
              type="confirmPassword"
              name="confirmPassword"
              placeholder="Your confirm password..."
              component={Input}
            />
            <Button disabled={!isValid} type="submit">
              Login
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignUp;
