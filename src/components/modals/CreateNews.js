import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import http from "../../utils/http";
import {Context} from "../../index";

const CreateNews = ({show, onHide}) => {
    const {user} = useContext(Context)
    const {news} = useContext(Context)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const fetchNews = async () => {
        return await http.get('api/news');
    }

    const getNews = () => {
        fetchNews().then(r => {
            news.setNews(r.data);
        }).catch();
    }

    const createNews = async () => {
        return await http.post('api/news', {title: title, text: text, author: user.user.id });
    }

    const createNewsHandler = () => {
        http.get('/sanctum/csrf-cookie').then(c => {
            createNews().then(r => {
                onHide()
                getNews()
            }).catch();
        }).catch();
    }

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
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={"Введите заголовок"}
                    />
                    <p className="mt-2 mb-2">Или</p>
                    <Form.Control className="mt-2"
                                  value={title}
                                  onChange={e => setTitle(e.target.value)}
                                  placeholder={"Введите расширенный заголовок"}
                    />
                    <div className="input-group">
                        <textarea className="form-control mt-2" aria-label="With textarea" placeholder={"Текст"} value={text}
                                  onChange={e => setText(e.target.value)}/>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={createNewsHandler}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateNews;