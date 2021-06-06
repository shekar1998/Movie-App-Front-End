import React, { createContext, useReducer } from 'react'
import reducer from '../reducer/reducer'

interface Props {
    children:any
}

export const Context = createContext<any>({});

const initialState = {  
    movies:[],
    directors:[],
    search:'',
    age:0
}

const ContextProvider = (props:Props) => {
    const [show, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ show , dispatch}} >
            {props.children}
            </Context.Provider>
    )
}

export default ContextProvider;