import { types } from '../types/types'
import { fecthNotUsingToken } from '../helpers/fetch'
import Swal from 'sweetalert2';


export const startLogin = (email, password) => {

    return async (dispatch) => {

        const response = await fecthNotUsingToken('auth/signin', { email, password }, 'POST');
        const body = await response.json();

        if (body.ok) {
            localStorage.setItem('react-06-calendar-token', body.data.token)
            localStorage.setItem('react-06-calendar-init-date-token', new Date().getTime())

            dispatch(startAuth(types.AUTH_SIGNIN, body.data));
        }else{
            Swal.fire(body.message);
        }
    }
}


export const startAuth = (type, payload) => ({ type, payload });