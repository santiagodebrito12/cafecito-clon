import React,{useReducer} from 'react'
import usuarioContext from './UsuarioContext';
import { UsuarioReducer } from './UsuarioReducer';

const UsuarioState = (props) => {
    
   
    const initialState = {
        users:[],
        categoria: null,
        busqueda: [],
        userBusqueda:null,
        userSelect:null,
    }

    const [state, dispatch] = useReducer(UsuarioReducer, initialState)

    const getUsers = (users)=>{
        dispatch(
            {
                type:'GET_USERS',
                payload:users,
            }
        )
    }
    const setCategoria = (categoria)=>{
        dispatch(
            {
                type:'SET_CATEGORIA',
                payload:categoria,
            }    
        )
    }
    const buscarCategoria = (categoria) =>{
        dispatch(
            {
                type:'SET_BUSQUEDA',
                payload:categoria,

            }
        )
    }

    const busquedaUser = (user) =>{
        dispatch({
            type:'SET_BUSQUEDA_USUARIO',
            payload:user,
        })
    }

    const selectUser = (user) =>{
        dispatch(
            {
                type:'SELECT_USER',
                payload:user,

            }
        )
    }

    return (
        <usuarioContext.Provider value={{
            users:state.users,
            categoria:state.categoria,
            busqueda:state.busqueda,
            userBusqueda:state.userBusqueda,
            userSelect:state.userSelect,
            getUsers,
            setCategoria,
            buscarCategoria,
            selectUser,
            busquedaUser,

        }}>
                {props.children}
        </usuarioContext.Provider>
    )
}

export default UsuarioState;

