import React from 'react';

import NavBar from '../../components/NavBar';
import { Container, Card, Row, Col  } from 'react-bootstrap';
import { H2 } from './styles';

export default function Home(){

  return (
    <Container fluid>
      <NavBar />

        <Row>

          <Col>
              <Card
              //  style={{ width: '20rem' }}
              >
                <Card.Body>
                  <Card.Title style={{color:'#011936'}}>O que é esse site?!</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Projeto dedicado a união de áreas</Card.Subtitle>
                  <Card.Text style={{color:'#465362'}}>
                    Reconhecimento de células hematologicas com AI/RN.
                  </Card.Text>
                  <Card.Link href="/analise">Analise Hematologica</Card.Link>
                  <Card.Link href="/ajudar">Como ajudar</Card.Link>
                </Card.Body>
              </Card>  
            </Col>

        </Row>
        <br/>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">
                <H2>Nosso Golden Circle</H2>
                </Card.Header>
                <Card.Body>
                <Card.Title style={{color:'#011936'}}>Why</Card.Title>
                <Card.Text style={{color:'#465362'}}>
                  Ajudar, Solucionar, Facilitar! 
                </Card.Text>
                <Card.Title style={{color:'#011936'}}>How</Card.Title>
                <Card.Text style={{color:'#465362'}}>
                  Fazendo = Tecnologia + Saúde/Biologicas
                </Card.Text>
                <Card.Title style={{color:'#011936'}}>What</Card.Title>  
                <Card.Text style={{color:'#465362'}}>
                  O mundo acadêmico tenta fracionar as áreas para facilitar o entendimento,
                  mas as melhores soluções são as mixturadas.
                  Então mixturando as aréas de conhecimento vamos ajudar a vizualização
                  de cálulas, patógenos e demais requesitos da área!
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>

          {/* <Col>
            <Card 
            // style={{ width: '20rem' }}
            >
              <Card.Body>
                <Card.Title style={{color:'#011936'}}>O que é esse site?!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Projeto dedicado a união de áreas</Card.Subtitle>
                <Card.Text style={{color:'#465362'}}>
                  Reconhecimento de células hematologicas com AI/RN.
                </Card.Text>
                <Card.Link href="/analise">Analise Hematologica</Card.Link>
                <Card.Link href="/ajudar">Como ajudar</Card.Link>
              </Card.Body>
            </Card>  
          </Col> */}

        </Row>
      <br/>
    </Container>
  )
};