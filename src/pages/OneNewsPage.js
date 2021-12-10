import React, {useContext, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {ONE_NEWS_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {Context} from "../index";

const OneNewsPage = () => {
    const {news} = useContext(Context)
    const history = useHistory()
    return (
        <Container className="mt-3">
            <Row>
                <Card style={{width: 200}} border={"light"}>
                    <div className="text-black mt-1 mb-4 d-flex justify-content-between">
                        <Image width={200} height={200} src={news.img} style={{cursor: 'pointer'}}/>
                        <div className="ms-4">
                            <div className="mb-3" style={{cursor: 'pointer'}}><h5>{news.news.title}</h5>
                            </div>
                            <div className=" align-items-center">{news.text}</div>
                            <div className="d-flex mt-5 justify-content-between" style={{paddingLeft:50}}>
                                <p className="" style={{marginLeft:100}}>{news.category}</p>
                                <p className="" style={{marginLeft:100}}>{news.userId}</p>
                                <p className="" style={{marginLeft:100}}>{news.date}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </Row>

        </Container>
    );
};

export default OneNewsPage;