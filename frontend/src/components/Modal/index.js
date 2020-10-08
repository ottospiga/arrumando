import React, { useState }from 'react';

import { Button, Modal, Tabs, Tab, Form} from 'react-bootstrap';

export default function ModalMail(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contatos
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#011936'}}>Contatos:</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:'#011936'}}>
         
        <Tabs defaultActiveKey="Email" id="uncontrolled-tab-example">
          <Tab eventKey="Email" title="Email">
            <Form>
                <br/>
                <h3>Envie um e-mail!</h3>
              {/* <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="name" placeholder="Nome" />
                <Form.Text className="text-muted">
                  Não é necessário se identificar!
                </Form.Text>
              </Form.Group> */}
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                  Este campo não é necessario, mas caso queria uma resposta...
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab>
          
          <Tab eventKey="Links úteis" title="Links úteis">
            <br />
            <h5>Codigo/GitHub:</h5>
            <h6>Para ajudar com o doação de dados/dataSet, por favor mande um 
              e-mail para solicitar a URL de upload de dados!<br />
              Ficamos Grato!</h6>
          </Tab>
        </Tabs>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};