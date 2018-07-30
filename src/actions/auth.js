import api from '../api'
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types'

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = (user) => ({
    type: USER_LOGGED_OUT
})


export const login = data => dispatch => api.user.login(data).then(user => dispatch(userLoggedIn(user)))
export const register = data => dispatch => api.user.register(data).then(user=>dispatch(userLoggedIn(user)))