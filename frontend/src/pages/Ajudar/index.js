import React from 'react';

import NavBar from '../../components/NavBar';
import ModalE from '../../components/Modal';
import { Container, Col, Card, CardGroup } from 'react-bootstrap';
import { H2 } from './styles';

export default function Ajudar(){

  return (
    <Container fluid>
      <NavBar />

      <Col>
        <Card>
          <Card.Header as="h5">
            <H2>Como Ajudar?</H2>
            </Card.Header>
            <Card.Body>
              <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Title style={{color:'#011936'}}>Saúde/Biologicas</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      -Aumentar o DataSet do projeto
                    </Card.Subtitle>        
                    <Card.Text style={{color:'#465362'}}>
                      O projeto contém um data set pequeno para análise dos dados.
                      Qualquer quantidade de dados já são validas!<br/>
                      (Claro que se vierem pré organizados/classificadas é melhor)
                      <br/><br/>
                      Atualmente estamos trabalhando com 4 tipos celulares: Eosinofilos, Monocitos
                      , linfocito e neutroficlo segmentado.
                      <br/>
                      MAS PRECISAMOS DE FOTOS DE TODOS OS TIPOS CELULARES DA ESCALA MATURATIVA
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title style={{color:'#011936'}}>Tecnologia</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      -Melhorar o desempenho da rede.
                    </Card.Subtitle>        
                    <Card.Text style={{color:'#465362'}}>
                      Ele foi desenvolvido com Keras(python) e traduzido para tensorflow.js (JavaScript)
                      posteriormente. Entretando ele perdeu 2 camadas de processamento de dado por conta
                      de performace. [melhor a rede e aumentar a quantidade de imagens de treino deve resolver] <br/>
                      GITHUB:
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                      -Organizar as 'tarefas' no git.
                    </Card.Subtitle>        
                    <Card.Text style={{color:'#465362'}}>
                      Organizar as tarefa a serem feitas no git//para melhor funcinamento/manutenção
                      do código.
                      <br/>
                      Link:
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
              <br/>
              <ModalE/>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                SUGESTÕES/IDEIAS SÃO SEMPRE BEM VINDAS! E-mail para contato: ottospi@hotmail.com</small>
            </Card.Footer>
        </Card>
      </Col>


  </Container>
  )
};