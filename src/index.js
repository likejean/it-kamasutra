import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});