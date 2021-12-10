import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateVisit = ({show, onHide}) => {
    const [reason, setReason] = useState('')
    const [date, setDate] = useState('')

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
                        value={reason}
                        onChange={e => setReason(e.target.value)}
                        placeholder={"Введите причину визита"}
                    />
                    <Form.Control className="mt-2"
                                  value={date}
                                  onChange={e => setDate(e.target.value)}
                                  placeholder={"Введите дату"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateVisit;