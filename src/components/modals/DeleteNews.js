import React, {useContext} from 'react';
import {Button, Form, ListGroup, Modal} from "react-bootstrap";
import {Context} from "../../index";
import http from "../../utils/http";
import {observer} from "mobx-react-lite";

const DeleteNews = observer(({show, onHide}) => {
    const {news} = useContext(Context)
    const fetchNews = async () => {
        return await http.get('api/news');
    }

    const getNews = () => {
        fetchNews().then(r => {
            news.setNews(r.data);
        }).catch();
    }

    const deleteNews = async (id) => {
        return await http.delete(`api/news/${id}`);
    }

    const deleteNewsHandler = (e) => {
        deleteNews(e.currentTarget.dataset.id).then(r => {
            // const item = e.currentTarget.closest('.entry');
            // if (item) item.remove();
            getNews();
        }).catch();
    }

        getNews();

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    Удаление новости
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <ListGroup>
                        {news.news.map(news =>

                            <ListGroup.Item
                                style={{cursor: 'pointer'}}
                                key={news.id} className={"entry"}
                            >
                                <p>{news.title}</p>
                                <Button data-id={news.id} onClick={deleteNewsHandler}>Удалить</Button>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteNews;