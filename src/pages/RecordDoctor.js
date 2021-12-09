import React from 'react';
import {Button, Col, Container, Dropdown, Form, ListGroup} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {CABINET_ROUTE} from "../utils/consts";

const RecordDoctor = () => {
    const history = useHistory()

    return (
        <Container>
            <Form>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Выберите Врача</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            Симоненко Пётр Сергеевич
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Тимофеев Андрей Викторович
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Выберите День</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Понедельник</Dropdown.Item>
                        <Dropdown.Item>Вторник</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <ListGroup style={{width: 100}}>
                    <Col className="d-flex">
                        <ListGroup.Item style={{cursor: 'pointer', border:"medium"}}>9:30</ListGroup.Item>
                        <ListGroup.Item style={{cursor: 'pointer', border:"medium"}}>10:30</ListGroup.Item>
                        <ListGroup.Item style={{cursor: 'pointer', border:"medium"}}>11:30</ListGroup.Item>
                        <ListGroup.Item style={{cursor: 'pointer', border:"medium"}}>12:30</ListGroup.Item>
                    </Col>
                    <Col className="d-flex">
                        <ListGroup.Item style={{cursor: 'pointer', border:"medium"}}>10:00</ListGroup.Item>
                        <ListGroup.Item style={{cursor: 'pointer', border:"medium"}}>11:00</ListGroup.Item>
                        <ListGroup.Item style={{cursor: 'pointer', border:"medium"}}>12:00</ListGroup.Item>
                        <ListGroup.Item style={{cursor: 'pointer', border:"medium"}}>13:00</ListGroup.Item>
                    </Col>
                </ListGroup>
                <Button className="btn-success" onClick={() => history.push(CABINET_ROUTE)}>Записаться</Button>
            </Form>
        </Container>
    );
};

export default RecordDoctor;