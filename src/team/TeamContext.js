import React, { createContext, useEffect, useReducer } from "react";
import Swal from "sweetalert2";
import { checkMaxBad, checkMaxGood } from "../helpers/alignmentCheck";
import { types } from "../types/types";
import { teamReducer } from "./teamReducer";

export const TeamContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("team")) || [];
};

export const TeamProvider = ({ children }) => {
  const [team, dispatch] = useReducer(teamReducer, [], init);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  const handleAddMember = (hero) => {
    if (team.length === 6) {
      return Swal.fire({
        icon: "error",
        title: "6 Miembros maximo! ",
        text: "Elimina a alguien para agregar otro miembro",
      });
    }

    if (hero.biography.alignment === "good") {
      if (checkMaxGood(team)) {
        return Swal.fire({
          icon: "error",
          text: "Máximo de 3 heroes de buena alineación",
        });
      }
    }

    if (hero.biography.alignment === "bad") {
      if (checkMaxBad(team)) {
        return Swal.fire({
          icon: "error",
          text: "Máximo de 3 heroes de mala alineación",
        });
      }
    }

    dispatch({
      type: types.add,
      payload: hero,
    });
  };

  const handleRemoveMember = (hero) => {
    dispatch({
      type: types.remove,
      payload: hero,
    });
  };

  return (
    <TeamContext.Provider
      value={{ team, dispatch, handleAddMember, handleRemoveMember }}
    >
      {children}
    </TeamContext.Provider>
  );
};
