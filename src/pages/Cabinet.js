import React from 'react';
import {Button, Card, Container, Image} from "react-bootstrap";
import card from '../assets/cards.jpg'
import {useHistory} from "react-router-dom";
import {FAMILY_DOCTOR_ROUTE, OUTPATIENT_CARD_ROUTE, RECORD_DOCTOR_ROUTE} from "../utils/consts";


const Cabinet = () => {
    const history = useHistory()
    return (
        <Container className="d-flex justify-content-center align-self-center mt-5">
            <Card className="pb-4 me-4">
                <div>
                    <Image width={200} height={200} src={card} style={{cursor: 'pointer'}}
                           onClick={() => history.push(OUTPATIENT_CARD_ROUTE)}/>
                    <p className="ms-5">Карта пациента</p>
                    <Button className="ms-4" onClick={() => history.push(OUTPATIENT_CARD_ROUTE)}>Перейти в раздел</Button>
                </div>
            </Card>
            <Card className="pb-4 me-4">
                <div>
                    <Image width={200} height={200} src={card} style={{cursor: 'pointer'}}
                           onClick={() => history.push(RECORD_DOCTOR_ROUTE)}/>
                    <p className="ms-5">Запись к врачу</p>
                    <Button className="ms-4" onClick={() => history.push(RECORD_DOCTOR_ROUTE)}>Перейти в раздел</Button>
                </div>
            </Card>
            <Card className="pb-4">
                <div>
                    <Image width={200} height={200} src={card} style={{cursor: 'pointer'}}
                           onClick={() => history.push(FAMILY_DOCTOR_ROUTE)}/>
                    <p className="ms-5">Семейный врач</p>
                    <Button className="ms-4" onClick={() => history.push(FAMILY_DOCTOR_ROUTE)}>Перейти в раздел</Button>
                </div>
            </Card>
        </Container>
    );
};

export default Cabinet;