import React from 'react';

import alert from '../../assets/alert.svg';
import NavBar from '../../components/NavBar';

import { Footer, H2 } from './styles';

import { Table, CardDeck, Card, Container, Button } from 'react-bootstrap';

export default function Home(){

  // const URL = "https://teachablemachine.withgoogle.com/models/hgXJJHqbi/";

  // let model, webcam, labelContainer, maxPredictions;

  // async function init() {
  //     const modelURL = URL + "model.json";
  //     const metadataURL = URL + "metadata.json";

  //     model = await tmImage.load(modelURL, metadataURL);
  //     maxPredictions = model.getTotalClasses();

  //     const flip = true; // whether to flip the webcam
  //     webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
  //     await webcam.setup(); // request access to the webcam
  //     await webcam.play();
  //     window.requestAnimationFrame(loop);

  //     document.getElementById("webcam-container").appendChild(webcam.canvas);
  //     labelContainer = document.getElementById("label-container");
  //     for (let i = 0; i < maxPredictions; i++) { // and class labels
  //         labelContainer.appendChild(document.createElement("div"));
  //     }
  // }

  // async function loop() {
  //     webcam.update(); // update the webcam frame
  //     await predict();
  //     window.requestAnimationFrame(loop);
  // }

  // async function predict() {
  //     // predict can take in an image, video or canvas html element
  //     const prediction = await model.predict(webcam.canvas);
  //     for (let i = 0; i < maxPredictions; i++) {
  //         const classPrediction =
  //             prediction[i].className + ": " + prediction[i].probability.toFixed(2);
  //         labelContainer.childNodes[i].innerHTML = classPrediction;
  //     }
  // }

  var video = document.querySelector("#videoElement");

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }


  return (
    <Container fluid>
      <NavBar />

      <CardDeck>
        <Card>
          <Card.Body>
            {/* <ImportFileContainer> */}
                <Footer>
                  <p>
                    <img src={alert} alt="Alert" />
                    Apenas .csv TROCAR quando for deploy
                  </p>
                  <div id="webcam-container"></div>

                  {/* <div 
                  style={{
                    margin: '0px auto',
                    width: '500px',
                    height: '375px',
                    border: '10px #333 solid'}}
                  id="container">
                    <video 
                    style={{
                      width: '500px',
                      height: '375px'
                    }}
                    autoPlay={true} id="videoElement">
                    </video>
                  </div> */}

                  <div id="label-container"></div>
                  
                  <Button 
                  type="button" 
                  // onClick={init()}
                  > Start </Button>
                  {/* <Buttonx  type="button">
                    Analisar
                  </Buttonx> */}
                </Footer>
              {/* </ImportFileContainer> */}
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