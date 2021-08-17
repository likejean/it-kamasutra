import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App
        state={state}
        dispatch={store.dispatch.bind(store)}
    /></BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);