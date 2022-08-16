import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm";
import { postAsync } from "../redux/actions/actionRequest";

const FormAgregar = () => {
  const dispatch = useDispatch();

  const [form, handleInputChange, reset] = useForm({
    nombre: "",
    edad: "",
    especie: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postAsync(form));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa un nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edad (Años)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingresa una edad"
          name="edad"
          value={form.edad}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Especie</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa una especie"
          name="especie"
          value={form.especie}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
};

export default FormAgregar;
