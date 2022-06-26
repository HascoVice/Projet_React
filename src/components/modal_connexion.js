import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./modal_connexion.css"


function ModalConnexion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn__openModalConnexion" onClick={handleShow}>
        Mon compte
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="modalTitle">Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="nom@exemple.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="text" placeholder="..." autoFocus />
            </Form.Group>
            <a className="link__nouveauMDP" href="#">
              Mot de passe oublié ?
            </a>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            id="button__sinscrire"
            variant="secondary"
            onClick={handleClose}
          >
            S'inscrire
          </Button>
          <Button id="button__seconnecter" onClick={handleClose}>
            Se connecter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConnexion;
