import { INC_COUNT,DEC_COUNT, SET_NAME } from "./action";

const initState ={count : 10,name:""} ;//as an object
//reducer function(the manager of store)
const  reducerFn = (state=initState,action)=>{
     switch(action.type){
        case INC_COUNT:
          return {...state , count:state.count + 1}
        case DEC_COUNT:
          return {...state , count:state.count - 1}
        case SET_NAME:
            return {...state,name:action.payload}
         
          default:
        return state
     }
}

export default reducerFn;
