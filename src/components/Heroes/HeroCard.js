import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TeamContext } from "../../team/TeamContext";

export const HeroCard = ({ hero }) => {
  const { team, handleAddMember, handleRemoveMember } = useContext(TeamContext);

  const {
    image: { url },
    name,
    id,
    powerstats,
  } = hero;

  return (
    <div className='card hero-card text-light'>
      <img className='card-img-top' src={url} alt={name} />
      <div>
        <h5 className='card-title'>{name}</h5>
        <ul className='list-group list-group-flush'>
          <li>Inteligencia: {powerstats.intelligence}</li>
          <li>Fuerza: {powerstats.strength}</li>
          <li>Velocidad: {powerstats.speed}</li>
          <li>Durabilidad: {powerstats.durability}</li>
          <li>Poder: {powerstats.power}</li>
          <li>Combate: {powerstats.combat}</li>
        </ul>
      </div>
      {team.some((member) => member.id === hero.id) ? (
        <button
          onClick={() => handleRemoveMember(hero)}
          className='btn btn-danger m-2'
        >
          Eliminar
        </button>
      ) : (
        <button
          onClick={() => handleAddMember(hero)}
          className='btn btn-warning m-2'
        >
          Agregar
        </button>
      )}
      <Link to={`/hero-detail/${id}`} className='btn btn-primary m-2'>
        Detalles
      </Link>
    </div>
  );
};
