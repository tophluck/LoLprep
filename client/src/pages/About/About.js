import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col, ContentArea } from "../../components/Grid";

class About extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About LoLprep</h5>
                            <p className="card-text">LoLprep is an idea I've always wanted to work on. There are plenty of league sites for meta analysis, build analysis, or general champion info, but LoLprep is designed to let players think ahead and preplan any information they'd want in game. That way you don't have to think about what to build next in this situation or what champion to pick based on their teamcomp because you've already planned and saved that here.</p>
                            <p classname="card-text">LoLprep was built using react, express, mongo, node, and bootstrap. If you want to learn more about it or have any suggestions for the website, you can contact me via <a href="mailto:steve88bb@gmail.com">my email</a>. You can also view the app on the <a href="https://github.com/tophluck/LoLprep">github repo</a></p>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;
