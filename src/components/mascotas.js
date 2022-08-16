import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsync, getAsync } from "../redux/actions/actionRequest";
import useForm from "../hooks/useForm";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ModalPopup from "./ModalPopup";
import AgregarMascota from "./AgregarMascota";

const Mascotas = () => {
  const dispatch = useDispatch();
  const { httpRequest } = useSelector(store => store.httpRequestStore);
  const [datos, setDatos] = useState([]);
  const [modal, setModal] = useState(false);
  const [form, reset] = useForm({
    nombre: "",
    edad: "",
    especie: "",
  });
  const handleEditar = mascota => {
    modal ? setModal(false) : setModal(true);
    setDatos(mascota);
  };
  const handleDelete = id => {
    alert("vamos a eliminar esta mascota");
    dispatch(deleteAsync(id));
  };

  useEffect(() => {
    dispatch(getAsync());
  }, [dispatch]);
  return (
    <>
      <Table striped bordered responsive hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th># ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Especie</th>
            <th colSpan={2}>{<AgregarMascota />}</th>
          </tr>
        </thead>
        <tbody>
          {httpRequest.map(mascota => (
            <tr key={mascota._id} style={{ textAlign: "center" }}>
              <td>{mascota._id}</td>
              <td>{mascota.nombre}</td>
              <td>{mascota.edad}</td>
              <td>{mascota.especie}</td>
              <td>
                <Button
                  type="button"
                  variant="outline-danger"
                  onClick={() => handleDelete(mascota._id)}
                >
                  Eliminar
                </Button>
              </td>
              <td>
                <Button
                  type="button"
                  variant="outline-info"
                  onClick={() => handleEditar(mascota)}
                >
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {modal === true ? <ModalPopup datos={datos} /> : ""}
    </>
  );
};
export default Mascotas;
