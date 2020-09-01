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

import * as actions from '../../../store/actions'

const ProfileSchema = Yup.object().shape({
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
      .min(8, 'The password is too short'),
    confirmPassword: Yup.string().when('password', {
        is: password => password,
        then: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password does not match')
    })
});

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Profile = ({ firebase, editProfile, loading, error }) => {
    if(!firebase.profile.isLoaded) return null;
    return (
        <Formik
            initialValues={{
                firstName: firebase.profile.firstName,
                lastName: firebase.profile.lastName,
                email: firebase.auth.email,
                password: '',
                confirmPassword: ''
            }}
            validationSchema={ProfileSchema}
            onSubmit={async (values, { setSubmitting }) => {
                await editProfile(values);
                setSubmitting(false);
            }}
        >
        {({ isSubmitting, isValid }) => (
            <FormWrapper>
            <Heading noMargin size="h1" color="white">
                Edit Your Profile
            </Heading>
            <Heading bold size="h4" color="white">
                Here you can edit your profile
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
                    loading={loading ? 'Editing...' : null} 
                    type="submit"
                >
                    Edit
                </Button>
                <MessageWrapper>
                    <Message error show={error}>
                        {error}
                    </Message>
                </MessageWrapper>
                <MessageWrapper>
                    <Message success show={error === false}>
                        Profile was updated!
                    </Message>
                </MessageWrapper>
            </StyledForm>
            </FormWrapper>
        )}
        </Formik>
    )
}

const mapStateToProps = ({ firebase, auth }) => ({
    firebase,
    loading: auth.profileEdit.loading,
    error: auth.profileEdit.error
})

const mapDispatchToProps = {
    editProfile: actions.editProfile
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);