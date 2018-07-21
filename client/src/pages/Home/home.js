import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Champions, ChampionSearch } from "../../components/Champions";
import { AllButton, VodHeader, VodLinks, VodSearch } from "../../components/Vods";
import { Container, Row, Col, ContentArea } from "../../components/Grid";
import "./Home.css"

class Home extends Component {
  state = {
    champions: []
  };

  componentDidMount() {
    this.loadChampions();
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
                      <p>{champion.name}</p>
                  </Champions>
                ))}
              </ContentArea>
            ) : (
              <div>
                <div class="champion">
                <a href="./champion/aatrox"><img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png `} alt="Aatrox" /></a>
                  <p>Aatrox</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Ahri.png `} alt="Ahri" />
                  <p>Ahri</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Akali.png `} alt="Akali" />
                  <p>Akali</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Alistar.png `} alt="Alistar" />
                  <p>Alistar</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Amumu.png `} alt="Amumu" />
                  <p>Amumu</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Anivia.png `} alt="Anivia" />
                  <p>Anivia</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Annie.png `} alt="Annie" />
                  <p>Annie</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Ashe.png `} alt="Ashe" />
                  <p>Ashe</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/AurelionSol.png `} alt="Aurelion Sol" />
                  <p>Aurelion Sol</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Azir.png `} alt="Azir" />
                  <p>Azir</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Bard.png `} alt="Bard" />
                  <p>Bard</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Blitzcrank.png `} alt="Blitzcrank" />
                  <p>Blitzcrank</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Brand.png `} alt="Brand" />
                  <p>Brand</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Braum.png `} alt="Braum" />
                  <p>Braum</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Caitlyn.png `} alt="Caitlyn" />
                  <p>Caitlyn</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Camille.png `} alt="Camille" />
                  <p>Camille</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Cassiopeia.png `} alt="Cassiopeia" />
                  <p>Cassiopeia</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Chogath.png `} alt="Cho'Gath" />
                  <p>Cho'Gath</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Corki.png `} alt="Corki" />
                  <p>Corki</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Darius.png `} alt="Darius" />
                  <p>Darius</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Diana.png `} alt="Diana" />
                  <p>Diana</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/DrMundo.png `} alt="Dr. Mundo" />
                  <p>Dr. Mundo</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Draven.png `} alt="Draven" />
                  <p>Draven</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Ekko.png `} alt="Ekko" />
                  <p>Ekko</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Elise.png `} alt="Elise" />
                  <p>Elise</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Evelynn.png `} alt="Evelynn" />
                  <p>Evelynn</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Ezreal.png `} alt="Ezreal" />
                  <p>Ezreal</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/FiddleSticks.png `} alt="Fiddlesticks" />
                  <p>Fiddlesticks</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Fiora.png `} alt="Fiora" />
                  <p>Fiora</p>
                </div>
                <div class="champion">
                  <img class="champIcon" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Fizz.png `} alt="Fizz" />
                  <p>Fizz</p>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
