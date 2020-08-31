import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {FormWrapper} from '../../../hoc/layout/elements';
import Heading from '../../../components/UI/Headings/Heading';
import Button from '../../../components/UI/Forms/Button/Button';
import Message from '../../../components/UI/Message/Message';

import * as actions from '../../../store/actions'

const VerifyEmail = ({ sendVerification, error, loading, cleanUp }) => {

    useEffect(() => {
        return () => {
            cleanUp()
        }
    }, [cleanUp])

    return (
        <FormWrapper>
            <Heading color="white" size="h1">
                Verify your email
            </Heading>
            <Heading color="white" bold size="h4">
                Go to your email inbox and verify your email.
            </Heading>
            <Button 
                loading={loading ? 'Sending email...' : null}
                onClick={() => sendVerification()}
                disabled={loading}
            >
                Re-send verification email
            </Button>
            <Message error show={error}>{error}</Message>
            <Message success show={error === false}>Message sent successfully</Message>
        </FormWrapper>
    )
    
}

const mapStateToProps = ({auth}) => ({
    loading: auth.verifyEmail.loading,
    error: auth.verifyEmail.error
})

const mapDispatchToProps = {
    sendVerification: actions.verifyEmail,
    cleanUp: actions.clean
}


export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
