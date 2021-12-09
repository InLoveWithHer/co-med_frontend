import React from 'react';
import {useHistory} from "react-router-dom";
import {Card, Col, Container, Image} from "react-bootstrap";
import {BLOG_ROUTE} from "../utils/consts";

const BlogItem = (blogs) => {
    const history = useHistory()

    return (
        <Container className="ms-4">
            <Col md={3} className={"m-auto"}>
                <Card style={{width: 200}} border={"light"}>
                    <div className="text-black mt-1 mb-4 d-flex justify-content-between">
                        <Image width={200} height={200} src={blogs.img} style={{cursor: 'pointer'}}
                               onClick={() => history.push(BLOG_ROUTE + '/' + blogs.id)}/>
                        <div className="ms-4">
                            <div className="mb-2" style={{cursor: 'pointer'}}
                                 onClick={() => history.push(BLOG_ROUTE + '/' + blogs.id)}>Заголовок
                            </div>
                            <div className="d-flex align-items-center">Описание</div>
                            <div className="d-flex mt-5 ms-3 justify-content-between">
                                <p className="me-5">Категория:{blogs.category}</p>
                                <p className="me-5">Автор:{blogs.author}</p>
                                <p className="me-5">Дата:{blogs.date}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </Container>

    );
};

export default BlogItem;