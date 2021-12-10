import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateVisit from "../components/modals/CreateVisit";

const VisitHistory = () => {
    const [createVisitVisible, setCreateVisitVisible] = useState(false)

    return (
        <Container>
            <table className="table">
                <Button
                    variant={"outline-dark"}
                    style={{width: 200}}
                    className="mt-4 p-2 mb-2"
                    onClick={() => setCreateVisitVisible(true)}
                >
                    Заполнить историю посещений
                </Button>
                <thead>
                <tr>
                    <th scope="col">Врач</th>
                    <th scope="col">Дата визита</th>
                    <th scope="col">Цель визита</th>
                    <th scope="col"> </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Пилюлькин В.А.</th>
                    <td>15.06.2021 15:30</td>
                    <td>Кашель</td>
                    <td>
                        <button className="btn btn-outline-primary" type="button">Подробнее</button></td>
                </tr>
                </tbody>
            </table>
            <CreateVisit show={createVisitVisible} onHide={() => setCreateVisitVisible(false)}/>
        </Container>
    );
};

export default VisitHistory;