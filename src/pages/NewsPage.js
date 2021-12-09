import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewsList from "../components/NewsList";

const NewsPage = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <NewsList/>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsPage;