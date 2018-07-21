import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col, ContentArea } from "../../components/Grid";
import { ChampionInfo } from "../../components/ChampionInfo";
import { Full } from "../../components/Full";

class Champion extends Component {
  state = {
    champion: {}
  };

  componentDidMount() {
    API.getChampion(this.props.match.params.name)
      .then(res => this.setState({ champion: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3 sm-3">
            <Full champion={this.state.champion}></Full>
          </Col>
          <Col size="md-9 sm-9">
            <ChampionInfo champion={this.state.champion}></ChampionInfo>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Champion;
