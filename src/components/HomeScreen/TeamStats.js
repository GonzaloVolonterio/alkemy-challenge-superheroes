import React, { useContext } from "react";
import { averageWH } from "../../helpers/averageWH";
import { powerstats } from "../../helpers/powerstats";
import { TeamContext } from "../../team/TeamContext";

export const TeamStats = () => {
  const { team } = useContext(TeamContext);

  const stats = powerstats(team);
  const { avHeight, avWeight } = averageWH(team);
  return (
    <div className=' text-center text-light '>
      <section>
        <h2>Información del equipo</h2>
        <p>Altura promedio: {avHeight} cm</p>
        <p>Peso promedio: {avWeight} kg</p>

        <h3>Estadísticas Globales</h3>
        <div>
          {stats.map((stat, i) => (
            <div key={i}>
              <h5>
                {stat.stat}: {stat.value}
              </h5>
              <progress max={100 * team.length} value={stat.value}></progress>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
