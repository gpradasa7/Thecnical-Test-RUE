import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm";
import { getAsync, putAsync } from "../redux/actions/actionRequest";

const ModalPopup = ({ datos }) => {
  const dispatch = useDispatch();

  //-----------Activacion del Modal----------//
  const [show, setShow] = useState(true);

  //-----------------cerrar--------------------//
  const handleClose = () => setShow(false);
  //-------Manipulación del Formulario y lograr Editar----------//
  const [form, handleInputChange, reset] = useForm({
    nombre: datos.nombre,
    edad: datos.edad,
    _id: datos._id,
    especie: datos.especie,
  });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(putAsync(form));
    dispatch(getAsync());
    handleClose();
    reset();
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mascotas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            style={{ margin: "5%", marginLeft: "10%", marginRight: "10%" }}
          >
            <h1 style={{ textAlign: "center", color: "blue" }}>
              EDITAR INFORMACIÓN
            </h1>
            <hr />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nombre de la Mascota</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Edad de la Mascota (AÑOS)</Form.Label>
              <Form.Control
                type="number"
                name="edad"
                value={form.edad}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Especie de la Mascota</Form.Label>
              <Form.Control
                type="text"
                name="especie"
                value={form.especie}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button type="submit" variant="info">
              Editar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalPopup;
