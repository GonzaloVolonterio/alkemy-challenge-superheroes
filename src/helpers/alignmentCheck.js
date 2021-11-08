export const checkMaxGood = (team) => {
  let count = team.reduce(
    (acc, member) => member.biography.alignment === "good" && acc + 1,
    0
  );
  return count >= 3;
};

export const checkMaxBad = (team) => {
  const count = team.reduce(
    (acc, member) => member.biography.alignment === "bad" && acc + 1,
    0
  );
  return count >= 3;
};
