import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {CABINET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context, retrieveUser} from "../index";
import http from "../utils/http";


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const Registration = async () => {
           return await http.post('api/sanctum/register', {email: email, name: name, password: password});

    }

    const RegisterHandler = () => {
        Registration().then(r => {
            user.setIsAuth(true)
            localStorage.setItem('token', r.data.token)

            retrieveUser().then(res => {
                user.setUser(res.data);
            }).catch();

            history.push(CABINET_ROUTE)
        }).catch();
    };


    const Login = async () => {
        return await http.post('api/sanctum/token', {email: email, password: password});
    }

    const loginHandler = () => {
        Login().then(r => {
            user.setIsAuth(true)
            localStorage.setItem('token', r.data.token)

            retrieveUser().then(res => {
                user.setUser(res.data);
            }).catch();

            history.push(CABINET_ROUTE)
        }).catch();
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш Email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {isLogin ?
                        <Form.Control
                            type="hidden"
                        />
                        :
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваше Имя..."
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="name"
                        />
                    }
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />

                    <Container className="d-flex justify-content-between mt-3">
                        <Row className="mt-1">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                            }
                        </Row>
                        {isLogin ?
                            <Button className="align-self-end" variant={"outline-dark"}
                                    onClick={loginHandler}>Войти</Button>
                            :
                            <Button className="align-self-end" variant={"outline-dark"}
                                    onClick={RegisterHandler}>Регистрация</Button>
                        }
                    </Container>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;