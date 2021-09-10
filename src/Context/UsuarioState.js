import React,{useReducer,useState,useEffect} from 'react'
import usuarioContext from './UsuarioContext';
import { UsuarioReducer } from './UsuarioReducer';
import {firebase,googleAuthProvider,FacebookAuthProvider} from '../firebase/conector';

const UsuarioState = (props) => {
    const [cargando, setCargando] = useState(true);
   
    const [user, setUser] = useState({})
    const[activeUser,setActiveUser]=useState(false);
    

    useEffect(() => {
        setTimeout(() => {
            setCargando(false)
        }, 1500);
    }, [])

    const initialState = {
        users:[],
        categorias:[],
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
    const resetCategorias = () =>{
            dispatch({
                type:'RESET_CATEGORIA',
                
            })
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


    const googleAuth = ( ) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
         .then( (userCred) =>{
            console.log(userCred)
            setUser(userCred)
            setTimeout(()=>{
                setActiveUser(true);
    
               },2000)
         })
         .catch(err=>console.log(err))
    } 
    const FacebookAuth= () =>{
        firebase.auth().signInWithPopup(FacebookAuthProvider)
        .then( (userCred) =>{
           console.log(userCred)
           setUser(userCred);
           setTimeout(()=>{
            setActiveUser(true);

           },2000)
           
        })
    }

    return (
        <usuarioContext.Provider value={{
            users:state.users,
            categoria:state.categoria,
            busqueda:state.busqueda,
            userBusqueda:state.userBusqueda,
            userSelect:state.userSelect,
            cargando,
            activeUser,
            getUsers,
            setCategoria,
            resetCategorias,
            buscarCategoria,
            selectUser,
            busquedaUser,
            setActiveUser,
            googleAuth,
            FacebookAuth

        }}>
                {props.children}
        </usuarioContext.Provider>
    )
}

export default UsuarioState;

