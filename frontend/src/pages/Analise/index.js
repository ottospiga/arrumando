import React from 'react';

import alert from '../../assets/alert.svg';
import NavBar from '../../components/NavBar';

import { Footer, H2 } from './styles';

import { Table, CardDeck, Card, Container, Button, Tab, Tabs } from 'react-bootstrap';

export default function Home(){

  return (
    <Container fluid>
      <NavBar />

      <CardDeck>
        <Card>
          <Card.Body>
            <Tabs defaultActiveKey="Video" id="uncontrolled-tab">
              <Tab eventKey="Foto" title="Foto">
              
                <Footer>
                  <p>
                    <img src={alert} alt="Alert" />
                    Apenas .csv TROCAR quando for deploy
                  </p>
                  <div id="webcam-container"></div>

                  <div id="label-container"></div>
                  
                  <Button 
                  type="button" 
                  // onClick={init()}
                  > Start </Button>            
                </Footer>  
              </Tab>

              <Tab eventKey="Video" title="Video">
                {/* Feature for the future */}
                <div style={{marginTop:'30px'}}>
                <h2 style={{color:"black"}}>Em desenvolvimento</h2>
                </div>
              </Tab>
            </Tabs>
          
          </Card.Body>
        </Card>

        <Card>
          <Card.Header as="h5">
          <H2>Resultado da Análise</H2>
          </Card.Header>
          <Card.Body>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Célula</th>
                  <th>Acerto (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Neutrófilo</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>Eosinófilo</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>Linfócito</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>Monócito</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </CardDeck>

  </Container>
  )
};