import { takeLatest, put, all, call } from 'redux-saga/effects'
import { auth, googleProvider, createUsersProfile, getCurrentUser } from '../../../firebase/firebase.utils'
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess } from './user.actions'
import { userActionTypes } from './user.types'

//// USER SIGN IN ///// 

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUsersProfile, userAuth)
        const userSnapshot = yield userRef.get()

        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

//// CHECK USER SESSION ///// 

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

//// USER SIGN OUT ///// 

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ])
}
