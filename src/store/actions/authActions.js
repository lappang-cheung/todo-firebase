import * as actions from '../actions/actionTypes';
// Sign up
export const signUp = (data) => async(dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({ type: actions.AUTH_START })

    try{
        const res = await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);

        // Send verification email
        const user = firebase.auth().currentUser;
        await user.sendEmailVerification();

        await firestore.collection('users').doc(res.user.uid).set({
            firstName: data.firstName,
            lastName: data.lastName
        })
        dispatch({ type: actions.AUTH_SUCCESS})
    } catch(err) {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message })
    }

    dispatch({ type: actions.AUTH_END })
}
// Sign in
export const signIn = (data) => async(dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    try{
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        dispatch({ type: actions.AUTH_START })
    } catch(err) {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message })
    }
    dispatch({ type: actions.AUTH_END})
}

// Sign out
export const signOut = () => async(dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    try{
        await firebase.auth().signOut();
        dispatch({ type: actions.AUTH_SUCCESS})
    } catch(err) {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message })
    }
    dispatch({ type: actions.AUTH_END})
}

// Clean up messages
export const clean = () => ({
    type: actions.CLEAN_UP
})

// Verify email
export const verifyEmail = () => async(dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    dispatch({ type: actions.VERIFY_START})
    try{
        const user = firebase.auth().currentUser;
        await user.sendEmailVerification();
        dispatch({ type: actions.VERIFY_SUCCESS});
    }catch(err) {
        dispatch({ type: actions.VERIFY_FAIL, payload: err.message })
    }
}