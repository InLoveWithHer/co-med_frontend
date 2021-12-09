import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, CABINET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NEWS_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {Context} from "../index";
import jwt_decode from "jwt-decode";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    let jwt = localStorage['token'];
    let decode = jwt_decode(jwt);
    let role = 'ADMIN'//decode['role']

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href={HOME_ROUTE}>Co-Med</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={HOME_ROUTE}>Главная</a>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href={BLOGS_ROUTE}>Блоги</a>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <a className="nav-link active" href={NEWS_ROUTE}>Новости</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        {role !== 'USER' ?
                            <button className="btn btn-outline-primary me-2" style={{width: 250}} type="button"
                                    onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</button>
                            :
                            <p></p>
                        }
                        <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
                        <button className="btn btn-outline-primary me-3 " type="submit">Поиск</button>
                        {user.isAuth ?
                            <button className="btn btn-outline-primary" type="button"
                                    onClick={() => history.push(CABINET_ROUTE)}>Кабинет</button>
                            :
                            <button className="btn btn-outline-primary" type="button"
                                    onClick={() => history.push(LOGIN_ROUTE)}>Войти</button>
                        }
                    </form>
                </div>
            </div>
        </nav>
    );
});

export default NavBar;