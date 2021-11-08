export const averageWH = (team) => {
  const height = team.map((hero) =>
    parseInt(hero.appearance.height[1].replace(" cm", ""))
  );
  const weight = team.map((hero) =>
    parseInt(hero.appearance.weight[1].replace(" kg", ""))
  );

  return {
    avHeight: (height.reduce((acc, n) => acc + n, 0) / team.length).toFixed(2),
    avWeight: (weight.reduce((acc, n) => acc + n, 0) / team.length).toFixed(2),
  };
};
