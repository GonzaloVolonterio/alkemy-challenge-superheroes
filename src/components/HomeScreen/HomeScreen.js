import React, { useContext } from "react";
import { TeamStats } from "./TeamStats";
import { HeroList } from "../Heroes/HeroList";
import { TeamContext } from "../../team/TeamContext";
import { Link } from "react-router-dom";

export const HomeScreen = () => {
  const { team } = useContext(TeamContext);

  return (
    <div className='container text-light '>
      <>
        {!team.length ? (
          <div>
            <h1>No hay héroes en tu equipo</h1>

            <Link to='/search' className='btn btn-success mt-4'>
              Buscar
            </Link>
          </div>
        ) : (
          <>
            <TeamStats />

            <h1 className='mt-4 text-center'>Mis héroes</h1>

            <HeroList heroes={team} />
          </>
        )}
      </>
    </div>
  );
};
