import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BlogList from "../components/BlogList";

const BlogsPage = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <BlogList/>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogsPage;