import { createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea sirve paRA COnectar nunestras app con la extension REDUX DETOOLS DEL NAVEGADOR

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea sirve para hacer peticiones en una api/servidor
    );





export default store;