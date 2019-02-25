import User from '../models/User'

/**
 * We're defining every action in name constant here
 * Typescript's understand enum better
 */
export enum ActionEnum{
    LOGIN_WITH_FIREBASE = 'LOGIN_WITH_FIREBASE',
    LOGIN_WITH_FIREBASE_SUCCESSFUL = 'LOGIN_WITH_FIREBASE_SUCCESSFUL',
    ANONYMOUS = 'ANONYMOUS',
    INCREMENT = 'INCREMENT'
}

/**
 * Defining action type
 */
 
export interface ILoginWithFirebase {
    type: ActionEnum.LOGIN_WITH_FIREBASE,
    loginInfo: { email: string, password: string}
}

export interface ILoginWithFirebaseSuccessful{
    type: ActionEnum.LOGIN_WITH_FIREBASE_SUCCESSFUL,
    user: User
}

export interface ILoginAnonymous {
    type: ActionEnum.ANONYMOUS,
    anonymousId: string
}

export interface Increment {
    type: ActionEnum.INCREMENT,
    value: number
}

/**
 * Action will use in login reducer
 */
export type Action = ILoginWithFirebase | ILoginWithFirebaseSuccessful | ILoginAnonymous | Increment