import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Champions, ChampionSearch } from "../../components/Champions";
import { AllButton, VodHeader, VodLinks, VodSearch } from "../../components/Vods";
import { Container, Row, Col, ContentArea } from "../../components/Grid";

class Home extends Component {
  state = {
    champions: []
  };

  componentDidMount() {
    this.loadChampions();
    // this.loadVods();
  }

  loadChampions = () => {
    API.getChampions()
      .then(res =>
        this.setState({ champions: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            {this.state.champions.length ? (
              <ContentArea>
                {this.state.champions.map(champion => (
                  <Champions>
                      <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion.image}`} alt={champion.name} />
                      <p>champ 1 placeholder</p>
                      <p>{champion.name}</p>
                  </Champions>
                ))}
              </ContentArea>
            ) : (
             <p>No champion's matched your search</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
