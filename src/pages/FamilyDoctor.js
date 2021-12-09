import React from 'react';
import {useHistory} from "react-router-dom";
import {Button, Container, Dropdown, Form} from "react-bootstrap";
import {CABINET_ROUTE} from "../utils/consts";

const FamilyDoctor = () => {
    const history = useHistory()

    return (
        <Container className="mt-4">
            <Form>
                <Dropdown className="mt-2 mb-5">
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
                <Dropdown className="mt-2 mb-5">
                    <Dropdown.Toggle>Тип подписи</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Оффлайн, в больнице</Dropdown.Item>
                        <Dropdown.Item>Онлайн</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button className="btn-success" onClick={() => history.push(CABINET_ROUTE)}>Подать заявку</Button>
            </Form>
        </Container>
    );
};

export default FamilyDoctor;