export const powerstats = (team) => {
  const stats = [
    {
      stat: "Inteligencia",
      value: team.reduce(
        (acc, member) => parseInt(member.powerstats.intelligence) + acc || acc,
        0
      ),
    },
    {
      stat: "Fuerza",
      value: team.reduce(
        (acc, member) => parseInt(member.powerstats.strength) + acc || acc,
        0
      ),
    },
    {
      stat: "Velocidad",
      value: team.reduce(
        (acc, member) => parseInt(member.powerstats.speed) + acc || acc,
        0
      ),
    },
    {
      stat: "Durabilidad",
      value: team.reduce(
        (acc, member) => parseInt(member.powerstats.durability) + acc || acc,
        0
      ),
    },
    {
      stat: "Poder",
      value: team.reduce(
        (acc, member) => parseInt(member.powerstats.power) + acc || acc,
        0
      ),
    },
    {
      stat: "Combate",
      value: team.reduce(
        (acc, member) => parseInt(member.powerstats.combat) + acc || acc,
        0
      ),
    },
  ];

  return stats.sort((a, b) => b.value - a.value);
};
