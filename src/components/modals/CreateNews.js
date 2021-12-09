import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import http from "../../utils/http";
import jwt_decode from "jwt-decode";

const CreateNews = ({show, onHide}) => {
    let jwt = localStorage['token']
    let decode = jwt_decode(jwt)
    let author = decode['id']
    let verification = false
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const Click = async () => {
        verification = true
    }

    const createNews = async () => {
            if (verification === false) {
                alert("Подтвердите публикацию")
            } else {
                await http.post('/sanctum/news/', {title: title, text: text, author: author});
                window.location.reload()
                onHide()
            }
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
                    {/*<p className="mt-2 mb-2">Или</p>*/}
                    {/*<Form.Control className="mt-2"*/}
                    {/*              value={title}*/}
                    {/*              onChange={e => setTitle(e.target.value)}*/}
                    {/*              placeholder={"Введите расширенный заголовок"}*/}
                    {/*/>*/}
                    <div className="form-check form-switch mt-2">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={Click}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Подтвердить
                            публикацию</label>
                    </div>
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea" placeholder={"Текст"} value={text}
                                  onChange={e => setText(e.target.value)}/>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={createNews}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateNews;