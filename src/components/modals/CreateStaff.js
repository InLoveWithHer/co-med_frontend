import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {Button, Form, Modal} from "react-bootstrap";
import http from "../../utils/http";

const CreateStaff = ({show, onHide}) => {
    const {user} = useContext(Context)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const fetchNews = async () => {
        return await http.get('api/staff');
    }

    const getUsers = () => {
        fetchNews().then(r => {
            user.setUser(r.data);
        }).catch();
    }

    const createUser = async () => {
        return await http.post('api/staff', {name: name, password: password, email: email, role: role });
    }

    const createUserHandler = () => {
        http.get('/sanctum/csrf-cookie').then(c => {
            createUser().then(r => {
                onHide()
                getUsers()
            }).catch();
        }).catch();
    }

    getUsers()

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    Создание новости
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите Имя"}
                    />
                    <Form.Control className="mt-2"
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                                  placeholder={"Введите пароль"}
                    />
                    <Form.Control className="mt-2"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  placeholder={"Введите Email"}
                    />
                    <Form.Control className="mt-2"
                                  value={role}
                                  onChange={e => setRole(e.target.value)}
                                  placeholder={"Введите Роль"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={createUserHandler}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateStaff;