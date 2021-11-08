import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";
import { TeamContext } from "../../team/TeamContext";
import { Loader } from "../Loader/Loader";

export const HeroDetail = () => {
  const { team, handleAddMember, handleRemoveMember } = useContext(TeamContext);

  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(true);

  const { heroId } = useParams();

  const { image, name, appearance, work, biography } = hero;

  useEffect(() => {
    getHeroById(heroId)
      .then((res) => {
        setHero(res);
      })
      .finally(() => setLoading(false));
  }, [heroId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='container text-light'>
          <h2>Detalles del héroe</h2>

          <div className='row'>
            <div className='col-md-5 col-sm-12 detail-img mb-4'>
              <img src={image.url} alt={name} />
            </div>
            <div className='col-md-7 col-sm-12'>
              <h5>
                Nombre: <span>{name}</span>
              </h5>
              <h5>
                Nombre completo: <span>{biography["full-name"]}</span>
              </h5>
              <h5>{biography.aliases.length === 1 ? "Alias" : "Alias"}</h5>
              <ul>
                {biography.aliases.map((alias, i) => (
                  <li key={i}>{alias}</li>
                ))}
              </ul>
              <h5>Apariencia</h5>
              <ul>
                <li>Género: {appearance.gender}</li>
                <li>Altura: {appearance.height.join(", ")}</li>
                <li>Peso: {appearance.weight.join(", ")}</li>
                <li>Color de ojos: {appearance["eye-color"]}</li>
                <li>Color de cabello: {appearance["hair-color"]}</li>
              </ul>
              <h5>
                Trabajo: <span>{work.occupation}</span>
              </h5>
            </div>
          </div>
          {team.some((member) => member.id === hero.id) ? (
            <button
              onClick={() => handleRemoveMember(hero)}
              className='btn btn-danger mt-4'
            >
              Eliminar
            </button>
          ) : (
            <button
              onClick={() => handleAddMember(hero)}
              className='btn btn-warning mt-4'
            >
              Agregar
            </button>
          )}
        </div>
      )}
    </>
  );
};
