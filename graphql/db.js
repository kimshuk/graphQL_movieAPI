const movies = [
  {
    id: "0",
    name: "Star Wars - The Last Jedi",
    score: 30
  },
  {
    id: 1,
    name: "Saving Private Ryan",
    score: 80
  },
  {
    id: 2,
    name: "Alice Wonderland",
    score: 45
  },
  {
    id: 3,
    name: "Avengers - Endgame",
    score: 88
  },
  {
    id: 4,
    name: "KungFu Panda",
    score: 20
  },
  {
    id: 5,
    name: "Wrecking Ralph",
    score: 13
  }
];

export const getMovies = () => getMovies;

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
