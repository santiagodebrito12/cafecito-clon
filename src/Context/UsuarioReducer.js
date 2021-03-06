
export const UsuarioReducer = (state,action)=>{

    const{type,payload}=action;


    switch (type) {
        case 'SET_CATEGORIA':
            return {
                ...state,
                categoria:payload,
            };
        
        case 'GET_USERS':
            return{
                ...state,
                users:payload,
            }

        case 'GET_CATEGORIAS':
            return{
                ...state,
                categorias:state.users.filter(usuario=>usuario.categoria)
            }
            
        case 'SET_BUSQUEDA':
            return{
                ...state,
                busqueda:state.users.filter(usuario=>usuario.categoria === payload)
            };
        
            case 'SELECT_USER':
            return {
                ...state,
                userSelect:payload,
            }
            
            case 'SET_BUSQUEDA_USUARIO':
                return{
                    ...state,
                    userBusqueda:state.users.filter(usuario=>usuario.nombre === payload)
                }
            case 'RESET_CATEGORIA':
                return{
                    ...state,
                    categoria:null,
                } 
        default:
            break;
    }





}