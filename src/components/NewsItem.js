import React from 'react';
import {Card, Col, Container, Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {ONE_NEWS_ROUTE} from "../utils/consts";

const NewsItem = ({news}) => {
    const history = useHistory()

    return (
        <Container className="">
            <Col md={3} className={"m-auto"}>
                <Card style={{width: 200}} border={"light"}>
                    <div className="text-black mt-1 mb-4 d-flex justify-content-between">
                        <Image width={200} height={200} src={news.img} style={{cursor: 'pointer'}}
                               onClick={() => history.push(ONE_NEWS_ROUTE + '/' + news.id)}/>
                        <div className="ms-4">
                            <div className="mb-3" style={{cursor: 'pointer'}}
                                 onClick={() => history.push(ONE_NEWS_ROUTE + '/' + news.id)}>{news.title}
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
            </Col>
        </Container>

    );

};

export default NewsItem;