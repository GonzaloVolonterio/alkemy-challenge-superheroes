import axios from "axios";

export const getHeroById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://superheroapi.com/api.php/10224968533057285/${id}`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => console.log(e));
  });
};
