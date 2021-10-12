import React, { useEffect, useState } from "react";
/* import {Button} from '@material-ui/core'
 */
/* import Button from 'react-bootstrap/Button';
 */
import "./App.css";
import Colors from "./colors";
import {
  Button,
  Form,
  ButtonGroup,
  ToggleButton,
  Row,
  Col,
  Image,
  Modal,
  Carousel,
} from "react-bootstrap";
import axios from "axios";
export default function Home() {
  const [inputs, setInputs] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [colors, setColors] = useState([]);
  const handleClose = () => {
    setModalShow(false);
  };
  const handleShow = () => {
    setModalShow(true);
  };
  useEffect(() => {
    console.log(inputs);
  }, [inputs]);
  useEffect(() => {}, []);
  /*   const handleSubmit = (e) => {
    var formData = new FormData();
    var imagefile = inputs.logo;
    formData.append("image", imagefile);
    console.log(formData);
    fetch("https://api.imgur.com/3/upload", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      body: formData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }; */
  return (
    <>
      <Form
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          width: "60%",
          marginLeft: "20%",
          marginRight: "20%",
          backgroundColor: "rgb(245,245,245)",
          marginTop: "50px",
          padding: "30px",
          borderRadius: "50px 50px 0px 0px",
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label style={{ textAlign: "left", fontWeight: "bolder" }}>
            Page Title:{" "}
          </Form.Label>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              fontFamily: "cursive",
              backgroundColor: inputs.titleBackground,
              color: inputs.titleColor,
            }}
          >
            {" "}
            {inputs.title}
          </span>
          <Row>
            <Col style={{ borderRight: "solid 2px grey" }}>
              <Form.Control
                style={{ marginTop: "20px" }}
                type="text"
                placeholder="Page Title"
                onChange={(e) => {
                  setInputs({ ...inputs, title: e.target.value });
                }}
              />
            </Col>

            <Col>
              <Form.Select
                style={{ marginTop: "20px" }}
                aria-label="Default select example"
                onChange={(e) =>
                  setInputs({ ...inputs, titleBackground: e.target.value })
                }
              >
                <option value="" selected hidden>
                  {" "}
                  Title Background{" "}
                </option>
                {Colors.map((color, index) => {
                  return (
                    <option
                      key={index}
                      style={{ backgroundColor: `#${color.hexCode}` }}
                      value={`#${color.hexCode}`}
                    >
                      {color.name}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Select
                style={{ marginTop: "20px" }}
                aria-label="Default select example"
                onChange={(e) =>
                  setInputs({ ...inputs, titleColor: e.target.value })
                }
              >
                <option value="" selected hidden>
                  {" "}
                  Title color{" "}
                </option>
                {Colors.map((color, index) => {
                  return (
                    <option
                      key={index}
                      style={{ backgroundColor: `#${color.hexCode}` }}
                      value={`#${color.hexCode}`}
                    >
                      {color.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ textAlign: "left", fontWeight: "bolder" }}>
            Page Logo:
          </Form.Label>
          <br />
          <Form.Control
            style={{ display: "none" }}
            id="logo"
            type="file"
            onChange={(e) => setInputs({ ...inputs, logo: e.target.files[0] })}
          />
          <div>
            {inputs.logo && (
              <Image
                roundedCircle={inputs.logoStyle === "Rounded"}
                style={{
                  textAlign: "center",
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  marginBottom: "30px",
                }}
                src={URL.createObjectURL(inputs.logo)}
              />
            )}
          </div>
          <Button
            className="mb-3"
            onClick={() => {
              document.getElementById("logo").click();
            }}
            variant="outline-secondary"
            className="RootButton"
          >
            Upload a Page Logo
          </Button>
        </Form.Group>

        <Form.Select
          style={{ width: "50%", marginBottom: "20px" }}
          aria-label="Default select example"
          onChange={(e) =>
            setInputs({ ...inputs, logoStyle: e.currentTarget.value })
          }
        >
          <option value="Square">Square</option>
          <option value="Rounded">Rounded</option>
        </Form.Select>

        <Form.Group>
          <Form.Control
            style={{ display: "none" }}
            id="carousel"
            type="file"
            onChange={(e) => setInputs({ ...inputs, carousel: e.target.files })}
            multiple
          />
          <Button
            className="mb-3"
            onClick={() => {
              document.getElementById("carousel").click();
            }}
            variant="outline-secondary"
            className="RootButton"
          >
            Upload images for carousel
          </Button>
          <Row>
            {inputs.carousel &&
              Array.from(inputs.carousel).map((image, index) => {
                return (
                  <Col>
                    <Image
                      key={index}
                      style={{
                        textAlign: "center",
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                        margin: "5px",
                      }}
                      src={URL.createObjectURL(image)}
                    />
                  </Col>
                );
              })}
          </Row>
        </Form.Group>
      </Form>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          width: "60%",
          marginLeft: "20%",
          marginRight: "20%",
          backgroundColor: "rgb(245,245,245)",
          borderRadius: "0px 0px 50px 50px",
          paddingBottom: "20px",
        }}
      >
        <button
          style={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            fontSize: "30px",
            alignSelf: "center",
            width: "50%",
            border: 0,
            borderRadius: 20,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "white",
            height: 48,
            padding: "0 30px",
            marginTop: "20px",
          }}
          onClick={handleShow}
        >
          Preview
        </button>
      </div>

      <Modal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>The Landing Page Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{marginBottom:'20px'}} >
            <Col>
              {inputs.logo && (
                <Image
                  roundedCircle={inputs.logoStyle === "Rounded"}
                  style={{
                    textAlign: "center",
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "30px",
                  }}
                  src={URL.createObjectURL(inputs.logo)}
                />
              )}
            </Col>

            <Col
                style={{
                  marginTop:'30px',
                  verticalAlign:'middle',
                  height:'70px',
                  fontSize: "20px",
                  backgroundColor: inputs.titleBackground,
                  color: inputs.titleColor,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                }}            
            >
              <div
                  style={{marginTop:'13px',alignSelf:'center'}}
              >
                {" "}
                {inputs.title}{" "}
              </div>
            </Col>
          </Row>

          <Carousel>
            {inputs.carousel &&
              Array.from(inputs.carousel).map((image, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={URL.createObjectURL(image)}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Check out the images</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
