import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types";

export const login = (userValues, dispatch) => {
  axios
    .post("http://challenge-react.alkemy.org/", userValues)
    .then(({ data }) => {
      dispatch({
        type: types.login,
        payload: {
          token: data.token,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Desautorizado...",
        text: "¡Revisa tu correo electrónico y contraseña!",
      });
    });
};
