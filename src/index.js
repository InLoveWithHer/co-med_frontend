import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import NewsStore from "./store/NewsStore";
import BlogStore from "./store/BlogStore";

export const Context = createContext(null)



ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        news: new NewsStore(),
        blog: new BlogStore()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);


