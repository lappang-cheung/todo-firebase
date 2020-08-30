import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';
import Message from '../../../components/UI/Message/Message';

import * as actions from '../../../store/actions';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

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
    .required('The passoword is required.')
    .min(8, 'The password is too short'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match')
    .required('You need to confirm your password.'),
});

const SignUp = ({ signUp, loading, error }) => {
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
      onSubmit={async (values, { setSubmitting }) => {
        await signUp(values);
        setSubmitting(false);
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
              type="password"
              name="confirmPassword"
              placeholder="Your confirm password..."
              component={Input}
            />

            <Button 
              disabled={!isValid || isSubmitting} 
              loading={loading ? 'Registering...' : null} 
              type="submit"
            >
              Register
            </Button>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
})

const mapDispatchToProps = {
  signUp: actions.signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
