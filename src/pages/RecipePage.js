import React from 'react';
import {Container} from "react-bootstrap";

const RecipePage = () => {
    return (
        <Container>
            <div style={{marginLeft: 500, marginBottom:50}}><h4>Список рецептів</h4></div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Идентификатор</th>
                    <th scope="col">Дата приписания</th>
                    <th scope="col">Кто виписал</th>
                    <th scope="col"> </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>№12345678</th>
                    <td>15.06.2021 15:30</td>
                    <td>Пилюлькин В.А.</td>
                    <td>
                        <button className="btn btn-outline-primary" type="button">Подробнее</button></td>
                </tr>
                <tr>
                    <th>№12345678</th>
                    <td>15.06.2021 15:30</td>
                    <td>Пилюлькин В.А.</td>
                    <td>
                        <button className="btn btn-outline-primary" type="button">Подробнее</button></td>
                </tr>
                <tr>
                    <th>№12345678</th>
                    <td>15.06.2021 15:30</td>
                    <td>Пилюлькин В.А.</td>
                    <td>
                        <button className="btn btn-outline-primary" type="button">Подробнее</button></td>
                </tr>
                </tbody>
            </table>
        </Container>
    );
};

export default RecipePage;