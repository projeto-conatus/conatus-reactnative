import React, {createContext, useReducer} from 'react';
import { initialState, UserReducer } from '../reducers/userReducers';

export const UserContext = createContext();

export default ({children}) => {
    const [state, dispatch] = useReducer(useReducer, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )

}