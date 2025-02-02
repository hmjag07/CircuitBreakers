import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        default:
            return state    
    }       
    
    }


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer,{
        user: null
    })

    useEffect(() => {
        // const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('user');
        console.log("Fetched from localStorage: ", user);
        if (user) {
          try {
            const parsedUser = JSON.parse(user);
            console.log("Parsed user: ", parsedUser);
            dispatch({ type: 'LOGIN', payload: parsedUser });
          } catch (error) {
            console.error("Error parsing user data:", error);
            // console.log(token);
            console.log({user}, "from auth2");

          }
        }
      }, []);
            console.log("state: ", state)
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )

}


