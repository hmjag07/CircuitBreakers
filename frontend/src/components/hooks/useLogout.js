import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthCOntext()

    const logout = () => {
      // remove user from storage
      localStorage.removeItem('user')
       
      //dispatch logout action
      dispatch({type: 'LOGOUT'})
    } 
    
    return {logout}
    
}