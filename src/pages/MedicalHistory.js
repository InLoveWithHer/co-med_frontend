import React from 'react';
import {Container} from "react-bootstrap";

const MedicalHistory = () => {
    return (
        <Container>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Диагноз</th>
                    <th scope="col">Дата установления диагноза</th>
                    <th scope="col">Дата выздоровления</th>
                    <th scope="col"> </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Шизофрения</th>
                    <td>10.01.2021</td>
                    <td>Не известно</td>
                    <td>
                        <button className="btn btn-outline-primary" type="button">Подробнее</button></td>
                </tr>
                <tr>
                    <th>Орви</th>
                    <td>10.12.2020</td>
                    <td>01.01.2021</td>
                    <td>
                        <button className="btn btn-outline-primary" type="button">Подробнее</button></td>
                </tr>
                <tr>
                    <th>Сахарный диабет</th>
                    <td>01.01.2021</td>
                    <td>Не известно</td>
                    <td>
                        <button className="btn btn-outline-primary" type="button">Подробнее</button></td>
                </tr>
                </tbody>
            </table>
        </Container>
    );
};

export default MedicalHistory;