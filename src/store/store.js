import {createStore,combineReducers} from "redux";
import {adminReducer} from '../Reducers/adminReducer';

export default ()=>{
  const store=createStore(
    combineReducers({
        addminReducer:adminReducer
    })
)
return store
}
