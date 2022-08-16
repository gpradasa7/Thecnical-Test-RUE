import PutData from "../../helpers/PutData";
import { apiKey } from "../../helpers/urls";
import axios, { AxiosResponse } from "axios";
import { types } from "../types/types";

//----------------post---------------//
export const postAsync = dataJson => {
  return async dispatch => {
    try {
      let { data } = await axios.post(`${apiKey}/mascota`, dataJson);
      dispatch(postSync(data));
      dispatch(getAsync());
    } catch (error) {
      alert("Hubo un error");
      console.log(error);
    }
  };
};

export const postSync = data => {
  return {
    type: types.post,
    payload: data,
  };
};

//----------------put-----------------//
export const putAsync = (data = {}) => {
  return async dispatch => {
    try {
      await axios.put(`${apiKey}/mascota/${data._id}`, {
        nombre: data.nombre,
        edad: data.edad,
        especie: data.especie,
      });
      alert("Información actualizada");
      dispatch(putSync(data));
      dispatch(getAsync());
    } catch (err) {
      console.log(err);
    }
  };
};
export const putSync = edit => {
  return {
    type: types.put,
    payload: { edit },
  };
};

//-------------------get--------------//
export const getAsync = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${apiKey}/mascota`);
      const dataJson = [];
      data.forEach(el => {
        dataJson.push({
          ...el,
        });
      });
      dispatch(getSync(dataJson));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getSync = mascota => {
  return {
    type: types.get,
    payload: mascota,
  };
};

//----------------delete--------------//
export const deleteAsync = id => {
  return async dispatch => {
    try {
      await axios.delete(`${apiKey}/mascota/${id}`);
      dispatch(deleteSync(id));
      dispatch(getAsync());
    } catch (error) {
      alert("Hubo un error");
      console.log(error);
    }
  };
};

export const deleteSync = key => {
  return {
    type: types.delete,
    payload: key,
  };
};
