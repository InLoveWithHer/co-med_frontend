import React from 'react';
import {useHistory} from "react-router-dom";
import {Button, Card, Container, Image} from "react-bootstrap";
import card from "../assets/cards.jpg";
import {MEDICAL_HISTORY_ROUTE, RECIPE_ROUTE, VISIT_HISTORY_ROUTE} from "../utils/consts";

const OutpatientCard = () => {
    const history = useHistory()
    return (
        <Container>
            <div>
                    <div className="d-flex justify-content-center">
                        <h4>Амбулаторная карта</h4>
                    </div>
                <div className="mt-4 d-flex justify-content-around">
                    <div>
                        <h5>ФИО:</h5>
                        <h5>Номер телефона:</h5>
                        <h5>Возраст:</h5>
                    </div>
                    <div>
                        <h5>Семейный врач:</h5>
                        <Button className="mt-4">Редактировать данные</Button>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-self-center mt-5">
                <Card className="pb-4 me-4">
                    <div>
                        <Image width={200} height={200} src={card} style={{cursor: 'pointer'}}
                               onClick={() => history.push(VISIT_HISTORY_ROUTE)}/>
                        <p className="ms-4">История посещений</p>
                        <Button className="ms-4" onClick={() => history.push(VISIT_HISTORY_ROUTE)}>Перейти в раздел</Button>
                    </div>
                </Card>
                <Card className="pb-4 me-4">
                    <div>
                        <Image width={200} height={200} src={card} style={{cursor: 'pointer'}}
                               onClick={() => history.push(MEDICAL_HISTORY_ROUTE)}/>
                        <p className="ms-4">История болезней</p>
                        <Button className="ms-4" onClick={() => history.push(MEDICAL_HISTORY_ROUTE)}>Перейти в раздел</Button>
                    </div>
                </Card>
                <Card className="pb-4">
                    <div>
                        <Image width={200} height={200} src={card} style={{cursor: 'pointer'}}
                               onClick={() => history.push(RECIPE_ROUTE)}/>
                        <p className="ms-5">Мои рецепты</p>
                        <Button className="ms-4" onClick={() => history.push(RECIPE_ROUTE)}>Перейти в раздел</Button>
                    </div>
                </Card>
            </div>

        </Container>
    );
};

export default OutpatientCard;